# OpenALC 组织主页

使用 Astro + TypeScript 构建的静态官网，目标地址为 https://openalc.github.io。

## 本地开发

需要 Node.js 24。

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run build
npm run preview
```

## GitHub Pages

将本项目推送到 `OpenALC/openalc.github.io` 的 `main` 分支，在仓库 **Settings → Pages → Source** 选择 **GitHub Actions**。工作流会执行类型检查、静态构建并部署到组织域名。

## 内容维护

- 项目名称、说明、技术与链接：`src/data/projects.ts`
- 首页文案及交互：`src/pages/index.astro`
- 页面样式：`src/styles/global.css`
- 站点地址：`astro.config.mjs`

## Logo

主页品牌图标与 favicon 使用 [cluster-route 的原始 SVG Logo](https://github.com/OpenALC/cluster-route/blob/179c7a8cef4b6c17b5951cb34aeac5068c598b64/web/public/logo.svg)，保留原始颜色和比例。本地文件为 `public/brand/cluster-route.svg`；原项目的 MIT 许可保存在 `public/brand/LICENSE.cluster-route.txt`。

项目内容根据 OpenALC 的两个公开仓库整理（2026-10-11）。首页架构图是概念示意，不读取实时服务状态。Cluster Link 的上游来源在项目卡片内明确标注，下载与安装以各项目 README 为准。
