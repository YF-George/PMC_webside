// commands.js

export const commands = [
    { id: 1, name: '/res create [領地名]', description: '創建一個名為[領地名]的領地。', category: '領地管理' },
    { id: 2, name: '/res remove [領地名]', description: '移除一個名為[領地名]的領地。', category: '領地管理' },
    { id: 3, name: '/res removeall', description: '移除所有領地。', category: '領地管理' },
    { id: 4, name: '/res confirm', description: '確認移除領地。', category: '領地管理' },
    { id: 5, name: '/res list', description: '列出目前所擁有的領地。', category: '領地管理' },
    { id: 6, name: '/res expand', description: '擴增面向的位置格數。', category: '領地管理' },
    { id: 7, name: '/res set', description: '設定你當前站的領地權限。', category: '領地管理' },
    { id: 8, name: '/res info', description: '獲取有關當前領地的資訊。', category: '領地管理' },
    { id: 9, name: '/res padd [玩家ID]', description: '添加該名玩家至領地。', category: '領地管理' },
    { id: 10, name: '/res pset [玩家ID]', description: '設置該名玩家特定的領地權限。', category: '領地管理' },
    { id: 11, name: '/res pdel [玩家ID]', description: '刪除該名玩家的領地權限。', category: '領地管理' },
    { id: 12, name: '/res tp [領地名]', description: '傳送至指定的領地。', category: '領地管理' },
    { id: 13, name: '/res tpset', description: '在自己的領地中設置傳送點。', category: '領地管理' },
    { id: 14, name: '/res rc [領地名]', description: '加入當前或定義的住宅聊天頻道。', category: '聊天功能' },
    { id: 15, name: '/res rc leave', description: '離開當前住所的聊天頻道。', category: '聊天功能' },
    { id: 16, name: '/res rc setprefix [新名稱]', description: '設置住宅聊天頻道前綴。', category: '聊天功能' },
    { id: 17, name: '/res rc kick [玩家ID]', description: '從頻道踢出玩家。', category: '聊天功能' },
    { id: 18, name: '/res give [領地名] [玩家ID]', description: '轉讓領地給其他玩家。', category: '領地管理' },
    { id: 19, name: '/res show', description: '以粒子效果顯示當前站立的領地範圍。', category: '顯示功能' }
  ];
  