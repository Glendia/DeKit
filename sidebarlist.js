const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'projects');
const sidebarConfig = {};

// 读取projects文件夹中的所有文件
const files = fs.readdirSync(projectsDir);

// 过滤出.md文件并读取其标题
const mdFiles = files.filter(file => file.endsWith('.md'));
const sidebarItems = mdFiles.map(file => {
  const filePath = path.join(projectsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const titleMatch = content.match(/# (.+)/);
  const title = titleMatch ? titleMatch[1] : file.replace('.md', '');
  const mtime = fs.statSync(filePath).mtime; // 获取文件的最后修改时间
  return { text: title, link: `/projects/${file.replace('.md', '')}`, mtime };
});

// 按照最后修改时间降序排序
sidebarItems.sort((a, b) => b.mtime - a.mtime);

// 去除mtime字段
sidebarItems.forEach(item => delete item.mtime);

// 将生成的侧边栏配置保存到.sidebar.js文件中
sidebarConfig['/projects/'] = sidebarItems;
fs.writeFileSync(path.join(__dirname, '.vitepress', 'js', 'sidebar.js'), `export const sidebar = ${JSON.stringify(sidebarConfig, null, 2)}`, 'utf-8');

console.log('Sidebar configuration generated successfully.');