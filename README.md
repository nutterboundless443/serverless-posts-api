# Serverless Posts API

## 项目介绍
这是一个基于无服务器架构的博客文章API，旨在让用户能够方便地管理他们的博客文章。用户可以创建、读取、更新和删除文章，同时支持用户评论功能。

## 功能特性
- 用户注册和登录（支持JWT身份验证）
- 创建、读取、更新和删除博客文章
- 支持文章评论功能
- 数据存储使用 DynamoDB 
- 采用 AWS Lambda 实现无服务器架构
- 简单的RESTful API 设计

## 技术栈
- AWS Lambda
- API Gateway
- DynamoDB
- Node.js
- Serverless Framework

## 安装和使用
1. 确保你有一个 AWS 账户。
2. 安装 Serverless Framework。
3. 克隆此仓库并进入项目目录。
4. 配置 AWS 凭证。
5. 部署API：
   ```bash
   serverless deploy
   ```
6. 访问生成的API端点进行测试。

## 贡献
欢迎提交问题和PR，参与本项目的开发！

## 许可证
本项目采用 MIT 许可证，详情请查看 LICENSE 文件。