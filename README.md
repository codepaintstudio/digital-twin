# 数字孪生项目 (Digital Twin)

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 项目简介

数字孪生项目是一个基于 Vue.js 和 Element Plus 的现代化大屏展示应用，采用 5120x1440 像素的超宽屏幕分辨率设计。项目通过实时数据监控、数据可视化和智能分析，为用户提供直观、高效的数据展示解决方案。

## 响应式实现方案

项目采用了先进的响应式实现方案，确保在 5120x1440 超宽屏幕上展示最佳效果：

- **固定尺寸容器**：通过 `screen.scss` 设置固定大小的容器，确保布局稳定
- **自动单位转换**：集成 `postcss-pxtorem` 和 `postcss-px-to-viewport` 插件，自动处理样式单位
- **Vite 配置优化**：通过 Vite 配置自动处理样式单位，无需手动修改组件代码
- **固定尺寸布局**：移除动态缩放逻辑，采用固定尺寸布局确保显示效果

## 功能特点

- 实时数据监控与分析
- 多维度数据可视化展示
- 智能预测与分析系统
- 交互式数据探索
- 超宽屏幕优化设计

## 技术架构

### 前端核心

- **前端框架**：Vue.js 3.x
- **状态管理**：Vuex 4.x
- **路由管理**：Vue Router 4.x

### UI 与可视化

- **UI 框架**：Element Plus
- **数据可视化**：ECharts 5.x
- **响应式处理**：postcss-pxtorem + postcss-px-to-viewport

### 工程化工具

- **构建工具**：Vite 4.x
- **HTTP 客户端**：Axios
- **代码规范**：ESLint + Prettier
- **Git 钩子**：Husky + lint-staged

## 开发环境要求

- Node.js 18.20.8
- npm 9.x

## 安装与运行

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

### 测试环境构建

```bash
npm run test
```

### 生产环境构建

```bash
npm run build
```

### 预览构建结果

```bash
# 开发环境预览
npm run preview:dev

# 测试环境预览
npm run preview:test

# 生产环境预览
npm run preview:prod
```

## 项目结构

```
digital-twin/
├─ .github/            # GitHub 相关配置
├─ .vscode/            # VS Code 配置
├─ public/             # 静态资源
├─ src/                # 源代码
│   ├─ assets/         # 资源文件
│   │   ├─ images/    # 图片资源
│   │   └─ styles/    # 全局样式
│   ├─ components/     # 组件
│   │   ├─ charts/    # 图表组件
│   │   ├─ common/    # 通用组件
│   │   └─ layout/    # 布局组件
│   ├─ router/         # 路由配置
│   ├─ server/         # 模拟服务数据
│   ├─ store/          # Vuex 状态管理
│   ├─ utils/          # 工具函数
│   │   ├─ AutoRem.js  # 响应式处理
│   │   └─ request.js  # 请求封装
│   ├─ views/          # 页面视图
│   ├─ App.vue         # 根组件
│   └─ main.js         # 入口文件
├─ .env.development    # 开发环境变量
├─ .env.production     # 生产环境变量
├─ postcss.config.js   # PostCSS 配置
├─ .eslintrc.js        # ESLint 配置
├─ .prettierrc.js      # Prettier 配置
├─ vite.config.js      # Vite 配置
└─ package.json        # 项目配置
```

## 代码规范

本项目使用 ESLint 和 Prettier 进行代码规范检查和格式化，使用 Husky 和 lint-staged 确保提交前代码符合规范。

```bash
# 运行代码检查
npm run lint

# 自动修复代码格式问题
npm run lint:fix

# 格式化代码
npm run format
```

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

本项目基于 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 联系方式

如有任何问题或建议，请通过 [issues](https://github.com/codepaintstudio/digital-twin/issues) 与我们联系。
