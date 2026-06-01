/** 站点级别的固定信息（联系方式、定位文案等集中管理） */
export const site = {
  name: "Winnie",
  role: "AI-native Builder",
  positioning: "从 0 到 1 独立交付可落地的自主 AI 系统",

  // 联系方式
  email: "wangtian_winnie@126.com",
  github: "https://github.com/winnieAI123",
  // TODO: 用户提供 LinkedIn 链接后替换
  linkedin: "https://www.linkedin.com/in/winnie",
};

/** 项目大区 / 子区的中文标签与排序 */
export const domains = [
  { key: "life", label: "生活" },
  { key: "work", label: "工作" },
] as const;

export const categories = [
  { key: "agent", label: "对话 Agent" },
  { key: "system", label: "AI 产品 & 数据系统" },
  { key: "skill", label: "可复用 Skill" },
] as const;
