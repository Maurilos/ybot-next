# YBOT Next


## Features

- 基于 **Next.js + React + TypeScript + Tailwind CSS**
- 采用 **App Router**
- 首页不是纯文章流，而是“内容入口 + 工具入口 + 项目入口”的组合结构
- 内置：
  - 博客列表页
  - 文章详情页
  - 工具页
  - 项目页
  - 关于页
- 已拆分为可维护的内容层、组件层、页面层
- 适合作为个人品牌站、内容站、工具导航站的新版母版

## Site Structure

当前站点按 4 条主线组织：

- **Blog**：文章、教程、笔记、方法论
- **Tools**：工具、资源、模块化整理
- **Projects**：项目展示、实验、案例
- **About**：站点定位、作者介绍、建设说明

## Project Structure

.
├─ app/                # 页面路由
├─ components/         # 组件
├─ content/            # 当前内容数据（文章 / 工具 / 项目）
├─ lib/                # 内容处理与通用方法
├─ public/             # 静态资源
├─ app/globals.css     # 全局样式
└─ README.md

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**

## Development

先安装依赖：

    npm install

启动开发环境：

    npm run dev

打开浏览器访问：

    http://localhost:3000

## Build

本地构建生产版本：

    npm run build

本地运行生产版本：

    npm run start

## Deployment

推荐部署到 **Vercel**。

流程很简单：

1. 将代码推送到 GitHub
2. 在 Vercel 导入仓库
3. 自动识别为 Next.js 项目
4. 每次 `git push` 后自动重新部署

## Content Strategy

当前仓库里的内容主要是**模板演示数据**，目的是先把整站结构、节奏和视觉风格搭稳。  
后续可逐步替换为真实内容，包括：

- 博客文章
- 工具清单
- 项目案例
- 关于页面

也就是说，这个仓库当前的重点不是“内容量”，而是“模板系统先成立”。

## Future Plan

后续可以继续扩展：

- 接入真实文章内容
- MDX / Markdown 内容系统
- 分类与标签页
- 搜索
- 文章目录
- SEO 优化
- 数据统计
- 多语言版本

## Why This Project Exists

这个项目的目标不是简单重做旧站，  
而是把 `ybot.top` 从传统博客升级为一个更有层次、更有气质、更适合长期扩展的个人内容站。

它优先解决的是：

- 首页门面感
- 内容分层
- 模块秩序
- 后续扩展能力

## License

MIT