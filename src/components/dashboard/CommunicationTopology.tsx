/**
 * CommunicationTopology — interactive SVG network graph.
 * Renders nodes (circles with IP labels) connected by edges.
 * One node can be "highlighted" (pink ring). Hover shows tooltip.
 * Desktop: full SVG canvas. Mobile: horizontally scrollable.
 */
"use client";

import { useState } from "react";
import type { TopoNode, TopoEdge } from "@/src/data/networkData";

interface CommunicationTopologyProps {
  nodes: TopoNode[];
  edges: TopoEdge[];
}

export default function CommunicationTopology({ nodes, edges }: CommunicationTopologyProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-4 text-sm font-semibold text-brand-white">Communication Topology</h3>

      <div className="overflow-x-auto scrollbar-thin">
        <svg
          viewBox="0 0 800 580"
          className="w-full min-w-[600px]"
          style={{ aspectRatio: "800/580" }}
        >
          {/* Grid dots */}
          <defs>
            <pattern id="grid-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#ffffff08" />
            </pattern>
          </defs>
          <rect width="800" height="580" fill="url(#grid-dots)" />

          {/* Edges */}
          {edges.map((edge) => {
            const from = nodeMap[edge.from];
            const to = nodeMap[edge.to];
            if (!from || !to) return null;
            const isActive = hovered === edge.from || hovered === edge.to;
            return (
              <line
                key={`${edge.from}-${edge.to}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isActive ? "#f71eaf" : "#3a3a50"}
                strokeWidth={isActive ? 2 : 1.2}
                strokeOpacity={isActive ? 0.9 : 0.5}
                className="transition-all duration-200"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const isHovered = hovered === node.id;
            const r = node.highlighted ? 22 : 16;
            return (
              <g
                key={node.id}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer"
              >
                {/* Highlight ring */}
                {node.highlighted && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={r + 6}
                    fill="none"
                    stroke="#f71eaf"
                    strokeWidth={2}
                    strokeOpacity={0.4}
                  />
                )}

                {/* Outer glow on hover */}
                {isHovered && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={r + 8}
                    fill="none"
                    stroke={node.highlighted ? "#f71eaf" : "#ffaa83"}
                    strokeWidth={1.5}
                    strokeOpacity={0.3}
                  />
                )}

                {/* Node circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={r}
                  fill={node.highlighted ? "#f71eaf" : "#282836"}
                  stroke={node.highlighted ? "#f71eaf" : isHovered ? "#ffaa83" : "#4a4a60"}
                  strokeWidth={node.highlighted ? 2 : 1.5}
                />

                {/* IP label */}
                <text
                  x={node.x}
                  y={node.y - r - 8}
                  textAnchor="middle"
                  fill={isHovered ? "#ffffff" : "#8888a0"}
                  fontSize={10}
                  fontFamily="monospace"
                >
                  {node.ip}
                </text>

                {/* Size label */}
                <text
                  x={node.x}
                  y={node.y + r + 16}
                  textAnchor="middle"
                  fill={node.highlighted ? "#f71eaf" : "#6a6a80"}
                  fontSize={9}
                  fontFamily="monospace"
                >
                  {node.size}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
