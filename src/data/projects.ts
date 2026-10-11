export interface Project {
  name: string;
  category: string;
  description: string;
  language: string;
  tags: string[];
  repo: string;
  readme: string;
  number: string;
}

// Public repository information checked on 2026-10-11.
export const projects: Project[] = [
  {
    name: 'Cluster Link',
    category: 'NETWORK / 网络连接',
    description: '基于 Tauri 的桌面网络工具。通过可视化界面管理配置、代理节点与路由规则，让日常连接更直观。',
    language: 'TypeScript / Rust',
    tags: ['Tauri', '桌面应用', '网络管理'],
    repo: 'https://github.com/OpenALC/Cluster-Link',
    readme: 'https://github.com/OpenALC/Cluster-Link#readme',
    number: '01',
  },
  {
    name: 'Cluster Route',
    category: 'AI GATEWAY / 模型路由',
    description: '一个入口，连接多个模型供应商。本地常驻网关支持 Anthropic 与 OpenAI 协议透明转发、用量统计和限额切换。',
    language: 'Go / Vue',
    tags: ['本地网关', '模型路由', '用量统计'],
    repo: 'https://github.com/OpenALC/cluster-route',
    readme: 'https://github.com/OpenALC/cluster-route#readme',
    number: '02',
  },
];
