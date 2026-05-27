// 211 工科顶尖高校数据 — 四川省物理类录取信息（2022-2025）
// 数据参考：四川省2026年高考指南（物理类）、四川省一分一段表
// 专业分类: 热门专业 → 重点专业 → 传统优势专业
// 一分一段: 640分=5796位, 630分=8961位, 620分=12979位, 610分=17774位, 600分=23461位
var DATA_211 = [
  // ==================== 北京邮电大学 ====================
  {
    id: "bupt", name: "北京邮电大学", category: "STRONG_ENGINEERING", province: "北京", city: "北京",
    majors: [
      { id:"bupt-comm", name:"通信工程（大类招生）", category:"HOT_ENGINEERING", employment:{ industries:["5G/6G通信","互联网","光通信","物联网"], roles:["通信系统工程师","网络规划师","协议栈工程师","无线通信研究员"], typicalEmployers:["华为","中兴通讯","中国移动","爱立信","中国信科","高通"], avgStartingSalary:"30-50万/年" }, admission:{ 2025:{score:649,rank:3636,enrollment:24}, 2024:{score:654,rank:3859,enrollment:24}, 2023:{score:651,rank:4263,enrollment:22}, 2022:{score:641,rank:4536,enrollment:20} } },
      { id:"bupt-cs", name:"计算机类", category:"HOT_ENGINEERING", employment:{ industries:["互联网平台","人工智能","网络安全","云计算"], roles:["软件工程师","算法工程师","系统架构师","技术总监"], typicalEmployers:["字节跳动","阿里巴巴","腾讯","百度","美团","京东"], avgStartingSalary:"32-55万/年" }, admission:{ 2025:{score:647,rank:4102,enrollment:24}, 2024:{score:652,rank:4314,enrollment:24}, 2023:{score:649,rank:4670,enrollment:22}, 2022:{score:639,rank:4941,enrollment:20} } },
      { id:"bupt-ee", name:"电子信息类", category:"HOT_ENGINEERING", employment:{ industries:["通信","消费电子","物联网"], roles:["硬件工程师","嵌入式开发","射频工程师"], typicalEmployers:["华为","小米","OPPO","高通"], avgStartingSalary:"28-48万/年" }, admission:{ 2025:{score:646,rank:4306,enrollment:17}, 2024:{score:650,rank:4759,enrollment:17}, 2023:{score:648,rank:4894,enrollment:15}, 2022:{score:637,rank:5406,enrollment:15} } },
      { id:"bupt-ai", name:"人工智能（大类招生）", category:"HOT_ENGINEERING", employment:{ industries:["AI","NLP","计算机视觉"], roles:["AI算法工程师","NLP研究员","CV工程师"], typicalEmployers:["字节跳动","商汤","旷视","百度"], avgStartingSalary:"32-58万/年" }, admission:{ 2025:{score:644,rank:4745,enrollment:16}, 2024:{score:648,rank:5211,enrollment:16}, 2023:{score:645,rank:5612,enrollment:14}, 2022:{score:634,rank:6102,enrollment:12} } },
      { id:"bupt-netsec", name:"网络空间安全", category:"CORE_ENGINEERING", employment:{ industries:["网络安全","密码学","信息安全"], roles:["安全工程师","密码工程师","渗透测试专家"], typicalEmployers:["奇安信","深信服","中电科","国家互联网应急中心"], avgStartingSalary:"30-52万/年" }, admission:{ 2025:{score:640,rank:5796,enrollment:8}, 2024:{score:645,rank:5976,enrollment:8}, 2023:{score:643,rank:6115,enrollment:8}, 2022:{score:632,rank:6567,enrollment:8} } }
    ]
  },
  // ==================== 西安电子科技大学 ====================
  {
    id: "xidian", name: "西安电子科技大学", category: "STRONG_ENGINEERING", province: "陕西", city: "西安",
    majors: [
      { id:"xidian-comm", name:"通信工程", category:"HOT_ENGINEERING", employment:{ industries:["5G/6G通信","军事通信","卫星通信","物联网"], roles:["通信系统工程师","基带工程师","射频工程师","无线通信专家"], typicalEmployers:["华为","中兴通讯","中电科20所","烽火通信","爱立信","大唐电信"], avgStartingSalary:"28-48万/年" }, admission:{ 2025:{score:636,rank:6992,enrollment:14}, 2024:{score:639,rank:7684,enrollment:14}, 2023:{score:636,rank:7994,enrollment:16}, 2022:{score:625,rank:8560,enrollment:14} } },
      { id:"xidian-cs", name:"计算机科学与技术", category:"HOT_ENGINEERING", employment:{ industries:["互联网","人工智能","网络安全","嵌入式系统"], roles:["软件工程师","AI工程师","安全研究员","系统架构师"], typicalEmployers:["华为西研所","字节跳动","中兴通讯","奇安信","百度","腾讯云"], avgStartingSalary:"30-52万/年" }, admission:{ 2025:{score:640,rank:5796,enrollment:10}, 2024:{score:645,rank:5976,enrollment:10}, 2023:{score:642,rank:6345,enrollment:12}, 2022:{score:631,rank:6799,enrollment:10} } },
      { id:"xidian-ee", name:"电子信息工程", category:"HOT_ENGINEERING", employment:{ industries:["雷达系统","信号处理","电子对抗","微波毫米波"], roles:["雷达信号处理工程师","FPGA工程师","嵌入式开发工程师","电子战系统专家"], typicalEmployers:["中电科14所","中电科38所","华为","大疆创新","中国兵器","航天科工"], avgStartingSalary:"28-50万/年" }, admission:{ 2025:{score:638,rank:6398,enrollment:10}, 2024:{score:642,rank:6814,enrollment:10}, 2023:{score:639,rank:7177,enrollment:12}, 2022:{score:628,rank:7643,enrollment:10} } },
      { id:"xidian-netsec", name:"网络空间安全", category:"CORE_ENGINEERING", employment:{ industries:["网络安全","密码学","国防信息安全"], roles:["密码工程师","安全研究员","渗透测试工程师"], typicalEmployers:["中电科30所","奇安信","深信服","国家密码管理局"], avgStartingSalary:"28-50万/年" }, admission:{ 2025:{score:635,rank:7273,enrollment:8}, 2024:{score:639,rank:7684,enrollment:8}, 2023:{score:636,rank:7994,enrollment:9}, 2022:{score:626,rank:8254,enrollment:8} } },
      { id:"xidian-micro", name:"微电子科学与工程", category:"CORE_ENGINEERING", employment:{ industries:["集成电路","芯片设计","半导体工艺","EDA"], roles:["IC设计工程师","模拟IC工程师","版图工程师","芯片验证专家"], typicalEmployers:["华为海思","中兴微电子","紫光展锐","华虹半导体","中芯国际","芯原微"], avgStartingSalary:"28-50万/年" }, admission:{ 2025:{score:633,rank:7923,enrollment:8}, 2024:{score:637,rank:8317,enrollment:8}, 2023:{score:634,rank:8606,enrollment:9}, 2022:{score:624,rank:8866,enrollment:8} } }
    ]
  },
  // ==================== 南京航空航天大学 ====================
  {
    id: "nuaa", name: "南京航空航天大学", category: "STRONG_ENGINEERING", province: "江苏", city: "南京",
    majors: [
      { id:"nuaa-cs", name:"计算机科学与技术", category:"HOT_ENGINEERING", employment:{ industries:["互联网","航空信息化","AI"], roles:["软件工程师","航空软件工程师","AI工程师"], typicalEmployers:["字节跳动","苏宁","中航信","中兴"], avgStartingSalary:"28-48万/年" }, admission:{ 2025:{score:645,rank:4527,enrollment:3}, 2024:{score:649,rank:4988,enrollment:3}, 2023:{score:646,rank:5364,enrollment:4}, 2022:{score:636,rank:5638,enrollment:3} } },
      { id:"nuaa-astro", name:"航空航天类", category:"CORE_ENGINEERING", employment:{ industries:["航空","航天","国防"], roles:["飞行器设计","气动工程师","推进工程师"], typicalEmployers:["中航工业","航天科工","中国商飞","GE航空"], avgStartingSalary:"26-45万/年" }, admission:{ 2025:{score:643,rank:4979,enrollment:52}, 2024:{score:647,rank:5444,enrollment:52}, 2023:{score:644,rank:5866,enrollment:55}, 2022:{score:634,rank:6102,enrollment:50} } },
      { id:"nuaa-ee", name:"电子信息类", category:"HOT_ENGINEERING", employment:{ industries:["航空电子","通信","雷达"], roles:["航空电子工程师","嵌入式工程师","信号处理工程师"], typicalEmployers:["中电科","中航工业","华为","大疆"], avgStartingSalary:"26-45万/年" }, admission:{ 2025:{score:638,rank:6398,enrollment:9}, 2024:{score:642,rank:6814,enrollment:9}, 2023:{score:639,rank:7177,enrollment:10}, 2022:{score:628,rank:7643,enrollment:9} } },
      { id:"nuaa-auto", name:"自动化", category:"CORE_ENGINEERING", employment:{ industries:["航空","智能制造","机器人"], roles:["飞控工程师","自动化工程师","机器人工程师"], typicalEmployers:["中航工业","西门子","大疆","埃斯顿"], avgStartingSalary:"25-42万/年" }, admission:{ 2025:{score:638,rank:6398,enrollment:7}, 2024:{score:642,rank:6814,enrollment:7}, 2023:{score:640,rank:6899,enrollment:8}, 2022:{score:629,rank:7337,enrollment:7} } },
      { id:"nuaa-mech", name:"机械工程", category:"TRADITIONAL_ENGINEERING", employment:{ industries:["航空制造","高端装备","数控"], roles:["航空制造工程师","数控工程师","工艺工程师"], typicalEmployers:["中航成飞","中航西飞","中航沈飞","中国商飞"], avgStartingSalary:"24-42万/年" }, admission:{ 2025:{score:630,rank:8961,enrollment:10}, 2024:{score:635,rank:8970,enrollment:10}, 2023:{score:632,rank:9205,enrollment:12}, 2022:{score:622,rank:9477,enrollment:10} } }
    ]
  },
  // ==================== 南京理工大学 ====================
  {
    id: "njust", name: "南京理工大学", category: "STRONG_ENGINEERING", province: "江苏", city: "南京",
    majors: [
      { id:"njust-weapon", name:"兵器类", category:"CORE_ENGINEERING", employment:{ industries:["国防","兵器","弹药"], roles:["武器系统工程师","弹药工程师","火工品工程师"], typicalEmployers:["兵器工业","兵器装备","航天科工","国防单位"], avgStartingSalary:"26-45万/年" }, admission:{ 2025:{score:632,rank:8272,enrollment:10}, 2024:{score:636,rank:8632,enrollment:10}, 2023:{score:633,rank:8891,enrollment:12}, 2022:{score:622,rank:9477,enrollment:10} } },
      { id:"njust-cs", name:"计算机类", category:"HOT_ENGINEERING", employment:{ industries:["互联网","AI","国防信息化"], roles:["软件工程师","AI工程师","安全工程师"], typicalEmployers:["字节跳动","苏宁","中电科28所","奇安信"], avgStartingSalary:"28-48万/年" }, admission:{ 2025:{score:633,rank:7923,enrollment:8}, 2024:{score:637,rank:8317,enrollment:8}, 2023:{score:633,rank:8891,enrollment:9}, 2022:{score:622,rank:9477,enrollment:8} } },
      { id:"njust-ee", name:"电子信息类", category:"HOT_ENGINEERING", employment:{ industries:["雷达","光电探测","电子对抗"], roles:["雷达工程师","电子对抗工程师","信号处理工程师"], typicalEmployers:["中电科14所","中电科28所","华为","中兴"], avgStartingSalary:"26-48万/年" }, admission:{ 2025:{score:631,rank:8583,enrollment:8}, 2024:{score:635,rank:8970,enrollment:8}, 2023:{score:631,rank:9518,enrollment:9}, 2022:{score:620,rank:10089,enrollment:8} } },
      { id:"njust-opt", name:"光电信息科学与工程", category:"CORE_ENGINEERING", employment:{ industries:["光学","激光","光电探测"], roles:["光学工程师","激光工程师","光电系统工程师"], typicalEmployers:["兵器工业209所","中电科11所","华为","大族激光"], avgStartingSalary:"26-48万/年" }, admission:{ 2025:{score:630,rank:8961,enrollment:6}, 2024:{score:634,rank:9316,enrollment:6}, 2023:{score:631,rank:9518,enrollment:7}, 2022:{score:620,rank:10089,enrollment:6} } },
      { id:"njust-mech", name:"机械类", category:"CORE_ENGINEERING", employment:{ industries:["高端装备","兵器","智能制造"], roles:["机械设计工程师","CAE工程师","制造工程师"], typicalEmployers:["兵器工业","西门子","埃斯顿","中电科"], avgStartingSalary:"24-42万/年" }, admission:{ 2025:{score:630,rank:8961,enrollment:12}, 2024:{score:634,rank:9316,enrollment:12}, 2023:{score:631,rank:9518,enrollment:14}, 2022:{score:620,rank:10089,enrollment:12} } }
    ]
  },
  // ==================== 哈尔滨工程大学 ====================
  {
    id: "hrbeu", name: "哈尔滨工程大学", category: "STRONG_ENGINEERING", province: "黑龙江", city: "哈尔滨",
    majors: [
      { id:"hrbeu-ship", name:"船舶与海洋工程", category:"CORE_ENGINEERING", employment:{ industries:["船舶","海洋工程","海军装备"], roles:["船舶设计师","海洋结构工程师","水动力工程师"], typicalEmployers:["中船重工","中国船舶","708所","大连船舶"], avgStartingSalary:"24-42万/年" }, admission:{ 2025:{score:628,rank:9704,enrollment:12}, 2024:{score:632,rank:10024,enrollment:12}, 2023:{score:628,rank:10487,enrollment:14}, 2022:{score:618,rank:10845,enrollment:12} } },
      { id:"hrbeu-nuclear", name:"核工程与核技术", category:"CORE_ENGINEERING", employment:{ industries:["核能","核电","核潜艇"], roles:["核工程师","反应堆工程师","核安全工程师"], typicalEmployers:["中核集团","中广核","国电投","719所"], avgStartingSalary:"25-42万/年" }, admission:{ 2025:{score:635,rank:7273,enrollment:8}, 2024:{score:640,rank:7412,enrollment:8}, 2023:{score:637,rank:7695,enrollment:10}, 2022:{score:626,rank:8254,enrollment:8} } },
      { id:"hrbeu-underwater", name:"水声工程", category:"CORE_ENGINEERING", employment:{ industries:["水下声学","声呐","海洋探测"], roles:["声呐工程师","水声信号处理","海洋探测工程师"], typicalEmployers:["中船715所","中科院声学所","海兰信","海军"], avgStartingSalary:"24-42万/年" }, admission:{ 2025:{score:628,rank:9704,enrollment:6}, 2024:{score:632,rank:10024,enrollment:6}, 2023:{score:628,rank:10487,enrollment:7}, 2022:{score:618,rank:10845,enrollment:6} } },
      { id:"hrbeu-cs", name:"计算机科学与技术", category:"HOT_ENGINEERING", employment:{ industries:["互联网","AI","船舶信息化"], roles:["软件工程师","AI工程师","船舶软件工程师"], typicalEmployers:["字节跳动","中船系统工程部","东软","海信"], avgStartingSalary:"24-42万/年" }, admission:{ 2025:{score:628,rank:9704,enrollment:8}, 2024:{score:631,rank:10413,enrollment:8}, 2023:{score:627,rank:10825,enrollment:9}, 2022:{score:616,rank:11601,enrollment:8} } },
      { id:"hrbeu-aero", name:"航空航天类", category:"CORE_ENGINEERING", employment:{ industries:["航空","航天","无人机"], roles:["飞行器设计","推进工程师","控制工程师"], typicalEmployers:["航天科工","中航工业","中国商飞","大疆"], avgStartingSalary:"22-38万/年" }, admission:{ 2025:{score:630,rank:8961,enrollment:6}, 2024:{score:634,rank:9316,enrollment:6}, 2023:{score:631,rank:9518,enrollment:7}, 2022:{score:620,rank:10089,enrollment:6} } }
    ]
  },
  // ==================== 武汉理工大学 ====================
  {
    id: "whut", name: "武汉理工大学", category: "STRONG_ENGINEERING", province: "湖北", city: "武汉",
    majors: [
      { id:"whut-mse", name:"材料科学与工程", category:"CORE_ENGINEERING", employment:{ industries:["新材料","建材","复合材料"], roles:["材料工程师","复合材料工程师","无机非金属工程师"], typicalEmployers:["中国建材","华新水泥","长飞光纤","中材科技"], avgStartingSalary:"22-40万/年" }, admission:{ 2025:{score:615,rank:15239,enrollment:14}, 2024:{score:619,rank:15562,enrollment:14}, 2023:{score:613,rank:16198,enrollment:16}, 2022:{score:602,rank:17419,enrollment:14} } },
      { id:"whut-ship", name:"船舶与海洋工程", category:"CORE_ENGINEERING", employment:{ industries:["船舶","内河航运","海洋工程"], roles:["船舶设计师","内河船舶工程师","轮机工程师"], typicalEmployers:["中船重工","中国船舶","长江航运集团","武昌船舶"], avgStartingSalary:"22-40万/年" }, admission:{ 2025:{score:612,rank:16680,enrollment:10}, 2024:{score:616,rank:17064,enrollment:10}, 2023:{score:609,rank:18012,enrollment:12}, 2022:{score:599,rank:18752,enrollment:10} } },
      { id:"whut-trans", name:"交通运输类", category:"CORE_ENGINEERING", employment:{ industries:["交通","物流","智能交通"], roles:["交通规划师","物流工程师","ITS工程师"], typicalEmployers:["中交二航局","长江航运","湖北交投","顺丰"], avgStartingSalary:"22-38万/年" }, admission:{ 2025:{score:615,rank:15239,enrollment:8}, 2024:{score:619,rank:15562,enrollment:8}, 2023:{score:613,rank:16198,enrollment:10}, 2022:{score:602,rank:17419,enrollment:8} } },
      { id:"whut-cs", name:"计算机类", category:"HOT_ENGINEERING", employment:{ industries:["互联网","AI","汽车智能化"], roles:["软件工程师","AI工程师","车载软件工程师"], typicalEmployers:["字节跳动武汉","小米武汉","东风汽车","斗鱼"], avgStartingSalary:"25-45万/年" }, admission:{ 2025:{score:621,rank:12558,enrollment:8}, 2024:{score:624,rank:13245,enrollment:8}, 2023:{score:618,rank:14158,enrollment:10}, 2022:{score:608,rank:14756,enrollment:8} } },
      { id:"whut-auto", name:"自动化类", category:"HOT_ENGINEERING", employment:{ industries:["智能制造","汽车电子","工业互联网"], roles:["自动化工程师","控制工程师","机器视觉工程师"], typicalEmployers:["东风汽车","西门子武汉","施耐德","中冶南方"], avgStartingSalary:"22-38万/年" }, admission:{ 2025:{score:619,rank:13420,enrollment:8}, 2024:{score:622,rank:14164,enrollment:8}, 2023:{score:616,rank:14955,enrollment:10}, 2022:{score:606,rank:15644,enrollment:8} } }
    ]
  },
  // ==================== 合肥工业大学 ====================
  {
    id: "hfut", name: "合肥工业大学", category: "STRONG_ENGINEERING", province: "安徽", city: "合肥",
    majors: [
      { id:"hfut-ee", name:"电气工程及其自动化", category:"HOT_ENGINEERING", employment:{ industries:["电力","新能源","智能制造"], roles:["电气工程师","新能源工程师","电力系统工程师"], typicalEmployers:["国网安徽","阳光电源","国轩高科","ABB"], avgStartingSalary:"22-40万/年" }, admission:{ 2025:{score:626,rank:10486,enrollment:8}, 2024:{score:629,rank:11205,enrollment:8}, 2023:{score:625,rank:11536,enrollment:10}, 2022:{score:614,rank:12356,enrollment:8} } },
      { id:"hfut-cs", name:"计算机科学与技术", category:"HOT_ENGINEERING", employment:{ industries:["互联网","AI","智能制造"], roles:["软件工程师","AI工程师","工业互联网工程师"], typicalEmployers:["科大讯飞","字节跳动","华为合肥","华米"], avgStartingSalary:"26-45万/年" }, admission:{ 2025:{score:625,rank:10898,enrollment:6}, 2024:{score:628,rank:11590,enrollment:6}, 2023:{score:623,rank:12254,enrollment:8}, 2022:{score:613,rank:12734,enrollment:6} } },
      { id:"hfut-auto", name:"车辆工程", category:"CORE_ENGINEERING", employment:{ industries:["汽车","新能源车","智能网联"], roles:["车辆工程师","新能源工程师","智能驾驶工程师"], typicalEmployers:["蔚来","江淮汽车","比亚迪","大众安徽"], avgStartingSalary:"24-42万/年" }, admission:{ 2025:{score:623,rank:11716,enrollment:10}, 2024:{score:627,rank:11962,enrollment:10}, 2023:{score:622,rank:12629,enrollment:12}, 2022:{score:612,rank:13112,enrollment:10} } },
      { id:"hfut-mech", name:"机械设计制造及其自动化", category:"CORE_ENGINEERING", employment:{ industries:["汽车制造","高端装备","数控"], roles:["机械设计工程师","制造工程师","CAE工程师"], typicalEmployers:["蔚来","江淮","合力叉车","中科院合肥院"], avgStartingSalary:"22-38万/年" }, admission:{ 2025:{score:622,rank:12096,enrollment:8}, 2024:{score:626,rank:12394,enrollment:8}, 2023:{score:621,rank:12995,enrollment:10}, 2022:{score:611,rank:13490,enrollment:8} } },
      { id:"hfut-ic", name:"集成电路设计与集成系统", category:"HOT_ENGINEERING", employment:{ industries:["集成电路","芯片设计","半导体"], roles:["IC设计工程师","验证工程师","DFT工程师"], typicalEmployers:["长鑫存储","晶合集成","华为海思","华大九天"], avgStartingSalary:"26-48万/年" }, admission:{ 2025:{score:626,rank:10486,enrollment:5}, 2024:{score:629,rank:11205,enrollment:5}, 2023:{score:625,rank:11536,enrollment:6}, 2022:{score:614,rank:12356,enrollment:5} } }
    ]
  },
  // ==================== 北京交通大学 ====================
  {
    id: "bjtu", name: "北京交通大学", category: "STRONG_ENGINEERING", province: "北京", city: "北京",
    majors: [
      { id:"bjtu-cs", name:"计算机类", category:"HOT_ENGINEERING", employment:{ industries:["互联网","AI","交通信息化"], roles:["软件工程师","交通信息化工程师","AI工程师"], typicalEmployers:["字节跳动","百度","中国铁科院","滴滴"], avgStartingSalary:"28-48万/年" }, admission:{ 2025:{score:632,rank:8272,enrollment:8}, 2024:{score:636,rank:8632,enrollment:8}, 2023:{score:632,rank:9205,enrollment:10}, 2022:{score:621,rank:9783,enrollment:8} } },
      { id:"bjtu-rail", name:"交通运输类", category:"CORE_ENGINEERING", employment:{ industries:["铁路","轨道交通","高铁"], roles:["轨道交通工程师","信号工程师","运输规划师"], typicalEmployers:["中国铁路","中国中车","铁科院","各铁路局"], avgStartingSalary:"24-42万/年" }, admission:{ 2025:{score:628,rank:9704,enrollment:12}, 2024:{score:632,rank:10024,enrollment:12}, 2023:{score:628,rank:10487,enrollment:14}, 2022:{score:618,rank:10845,enrollment:12} } },
      { id:"bjtu-ee", name:"电子信息类", category:"HOT_ENGINEERING", employment:{ industries:["铁路通信","5G-R","信号系统"], roles:["铁路通信工程师","信号工程师","GSM-R工程师"], typicalEmployers:["中国通号","中铁","华为铁路","中兴"], avgStartingSalary:"25-44万/年" }, admission:{ 2025:{score:628,rank:9704,enrollment:8}, 2024:{score:631,rank:10413,enrollment:8}, 2023:{score:627,rank:10825,enrollment:9}, 2022:{score:616,rank:11601,enrollment:8} } },
      { id:"bjtu-auto", name:"自动化类（智能系统与智能制造）", category:"CORE_ENGINEERING", employment:{ industries:["轨道交通自动化","智能制造","机器人"], roles:["自动化工程师","轨道交通控制工程师","系统集成工程师"], typicalEmployers:["中国通号","西门子","交控科技","铁科院"], avgStartingSalary:"24-42万/年" }, admission:{ 2025:{score:627,rank:10101,enrollment:6}, 2024:{score:631,rank:10413,enrollment:6}, 2023:{score:627,rank:10825,enrollment:7}, 2022:{score:616,rank:11601,enrollment:6} } },
      { id:"bjtu-civil", name:"土木类（智慧建造与智慧环境）", category:"TRADITIONAL_ENGINEERING", employment:{ industries:["铁路建设","桥梁","隧道"], roles:["铁道工程师","隧道工程师","桥梁工程师"], typicalEmployers:["中铁","中国铁建","中交","各省铁路公司"], avgStartingSalary:"20-36万/年" }, admission:{ 2025:{score:615,rank:15239,enrollment:8}, 2024:{score:619,rank:15562,enrollment:8}, 2023:{score:614,rank:15770,enrollment:10}, 2022:{score:605,rank:16088,enrollment:8} } }
    ]
  },
  // ==================== 西南交通大学 ====================
  {
    id: "swjtu", name: "西南交通大学", category: "STRONG_ENGINEERING", province: "四川", city: "成都",
    majors: [
      { id:"swjtu-ee", name:"电子信息类", category:"HOT_ENGINEERING", employment:{ industries:["通信","信号","轨道交通电子"], roles:["通信工程师","信号工程师","嵌入式开发"], typicalEmployers:["华为成都","中兴成都","中铁信","中国通号"], avgStartingSalary:"26-45万/年" }, admission:{ 2025:{score:630,rank:8961,enrollment:12}, 2024:{score:634,rank:9316,enrollment:12}, 2023:{score:629,rank:10159,enrollment:15}, 2022:{score:619,rank:10467,enrollment:12} } },
      { id:"swjtu-elec", name:"电气工程及其自动化", category:"CORE_ENGINEERING", employment:{ industries:["铁路电气化","电力","新能源"], roles:["电气化工程师","牵引供电工程师","电力系统工程师"], typicalEmployers:["中铁电气化局","国网四川","中国铁路","四方继保"], avgStartingSalary:"24-42万/年" }, admission:{ 2025:{score:628,rank:9704,enrollment:10}, 2024:{score:632,rank:10024,enrollment:10}, 2023:{score:628,rank:10487,enrollment:12}, 2022:{score:618,rank:10845,enrollment:10} } },
      { id:"swjtu-rail", name:"交通运输类", category:"CORE_ENGINEERING", employment:{ industries:["铁路","高铁","轨道交通"], roles:["轨道交通工程师","线路工程师","运输组织工程师"], typicalEmployers:["中国铁路成都局","中铁二院","中国中车","铁科院"], avgStartingSalary:"24-42万/年" }, admission:{ 2025:{score:610,rank:17774,enrollment:18}, 2024:{score:614,rank:18113,enrollment:18}, 2023:{score:606,rank:19346,enrollment:20}, 2022:{score:596,rank:20088,enrollment:18} } },
      { id:"swjtu-cs", name:"计算机类", category:"HOT_ENGINEERING", employment:{ industries:["互联网","AI","交通信息化"], roles:["软件工程师","交通信息化工程师","AI工程师"], typicalEmployers:["字节跳动成都","阿里成都","中铁信","滴滴"], avgStartingSalary:"26-45万/年" }, admission:{ 2025:{score:617,rank:14292,enrollment:10}, 2024:{score:620,rank:15090,enrollment:10}, 2023:{score:614,rank:15770,enrollment:12}, 2022:{score:603,rank:16975,enrollment:10} } },
      { id:"swjtu-mech", name:"机械类", category:"CORE_ENGINEERING", employment:{ industries:["机车车辆","高铁","城轨"], roles:["车辆工程师","转向架工程师","制动工程师"], typicalEmployers:["中国中车","中车资阳","中车眉山","新筑股份"], avgStartingSalary:"22-40万/年" }, admission:{ 2025:{score:620,rank:12979,enrollment:12}, 2024:{score:624,rank:13245,enrollment:12}, 2023:{score:618,rank:14158,enrollment:14}, 2022:{score:608,rank:14756,enrollment:12} } },
      { id:"swjtu-civil", name:"土木工程", category:"TRADITIONAL_ENGINEERING", employment:{ industries:["铁路建设","桥梁","隧道"], roles:["桥梁工程师","隧道工程师","铁道工程师"], typicalEmployers:["中铁二局","中铁二院","四川路桥","中铁建"], avgStartingSalary:"22-38万/年" }, admission:{ 2025:{score:614,rank:15739,enrollment:14}, 2024:{score:618,rank:16027,enrollment:14}, 2023:{score:613,rank:16198,enrollment:16}, 2022:{score:603,rank:16975,enrollment:14} } }
    ]
  },
  // ==================== 河海大学 ====================
  {
    id: "hhu", name: "河海大学", category: "STRONG_ENGINEERING", province: "江苏", city: "南京",
    majors: [
      { id:"hhu-water", name:"水利水电工程", category:"CORE_ENGINEERING", employment:{ industries:["水利","水电","水资源"], roles:["水利工程师","水文工程师","大坝安全工程师"], typicalEmployers:["中国电建","三峡集团","水利部","各省水利厅"], avgStartingSalary:"22-40万/年" }, admission:{ 2025:{score:618,rank:13814,enrollment:14}, 2024:{score:622,rank:14164,enrollment:14}, 2023:{score:616,rank:14955,enrollment:16}, 2022:{score:606,rank:15644,enrollment:14} } },
      { id:"hhu-cs", name:"计算机科学与技术", category:"HOT_ENGINEERING", employment:{ industries:["互联网","水利信息化","AI"], roles:["软件工程师","水利信息化工程师","AI工程师"], typicalEmployers:["字节跳动","苏宁","南瑞集团","中电科"], avgStartingSalary:"25-45万/年" }, admission:{ 2025:{score:624,rank:11304,enrollment:6}, 2024:{score:627,rank:11962,enrollment:6}, 2023:{score:622,rank:12629,enrollment:7}, 2022:{score:611,rank:13490,enrollment:6} } },
      { id:"hhu-ee", name:"电气工程及其自动化", category:"HOT_ENGINEERING", employment:{ industries:["电力","新能源","水利电气"], roles:["电气工程师","新能源工程师","水利电气工程师"], typicalEmployers:["国网江苏","南瑞集团","三峡集团","中国电建"], avgStartingSalary:"24-44万/年" }, admission:{ 2025:{score:624,rank:11304,enrollment:6}, 2024:{score:627,rank:11962,enrollment:6}, 2023:{score:622,rank:12629,enrollment:7}, 2022:{score:611,rank:13490,enrollment:6} } },
      { id:"hhu-hydr", name:"水文与水资源工程", category:"CORE_ENGINEERING", employment:{ industries:["水文","水资源","水环境"], roles:["水文工程师","水资源规划师","水环境工程师"], typicalEmployers:["水利部水文局","长江委","黄河委","各省水文局"], avgStartingSalary:"20-36万/年" }, admission:{ 2025:{score:611,rank:17239,enrollment:8}, 2024:{score:615,rank:17563,enrollment:8}, 2023:{score:608,rank:18438,enrollment:10}, 2022:{score:597,rank:19643,enrollment:8} } },
      { id:"hhu-port", name:"港口航道与海岸工程", category:"CORE_ENGINEERING", employment:{ industries:["港口","航道","海岸工程"], roles:["港口工程师","航道工程师","海岸工程师"], typicalEmployers:["中交","中国电建","交通运输部","各港务局"], avgStartingSalary:"22-38万/年" }, admission:{ 2025:{score:611,rank:17239,enrollment:8}, 2024:{score:615,rank:17563,enrollment:8}, 2023:{score:608,rank:18438,enrollment:9}, 2022:{score:597,rank:19643,enrollment:8} } }
    ]
  },
  // ==================== 中国矿业大学 ====================
  {
    id: "cumt", name: "中国矿业大学", category: "STRONG_ENGINEERING", province: "江苏", city: "徐州",
    majors: [
      { id:"cumt-mining", name:"采矿工程", category:"CORE_ENGINEERING", employment:{ industries:["矿业","煤炭","智能矿山"], roles:["采矿工程师","安全工程师","智能矿山工程师"], typicalEmployers:["中国煤科","神华集团","兖矿能源","中煤集团"], avgStartingSalary:"22-40万/年" }, admission:{ 2025:{score:595,rank:26136,enrollment:10}, 2024:{score:598,rank:27526,enrollment:10}, 2023:{score:588,rank:28531,enrollment:12}, 2022:{score:573,rank:30100,enrollment:10} } },
      { id:"cumt-safety", name:"安全科学与工程类", category:"CORE_ENGINEERING", employment:{ industries:["矿山安全","工业安全","城市安全"], roles:["安全工程师","风险评估师","安全评价师"], typicalEmployers:["中国煤科","应急管理部","中石化","各安评机构"], avgStartingSalary:"22-40万/年" }, admission:{ 2025:{score:595,rank:26136,enrollment:8}, 2024:{score:598,rank:27526,enrollment:8}, 2023:{score:588,rank:28531,enrollment:10}, 2022:{score:573,rank:30100,enrollment:8} } },
      { id:"cumt-cs", name:"计算机科学与技术", category:"HOT_ENGINEERING", employment:{ industries:["互联网","矿山信息化","AI"], roles:["软件工程师","矿山信息化工程师","AI工程师"], typicalEmployers:["字节跳动","浪潮","华为矿鸿","中科曙光"], avgStartingSalary:"24-42万/年" }, admission:{ 2025:{score:604,rank:21058,enrollment:6}, 2024:{score:607,rank:21956,enrollment:6}, 2023:{score:597,rank:23785,enrollment:7}, 2022:{score:585,rank:24926,enrollment:6} } },
      { id:"cumt-geo", name:"地质类", category:"CORE_ENGINEERING", employment:{ industries:["地质","煤炭地质","工程地质"], roles:["地质工程师","煤炭地质工程师","工程地质师"], typicalEmployers:["中国煤科","各省煤田地质局","中化地质","中国地调局"], avgStartingSalary:"20-36万/年" }, admission:{ 2025:{score:596,rank:25601,enrollment:6}, 2024:{score:599,rank:26883,enrollment:6}, 2023:{score:589,rank:28015,enrollment:7}, 2022:{score:575,rank:29241,enrollment:6} } },
      { id:"cumt-mech", name:"机械类", category:"TRADITIONAL_ENGINEERING", employment:{ industries:["矿山机械","工程机械","重型装备"], roles:["矿山机械工程师","掘进机工程师","机械设计"], typicalEmployers:["三一重工","中联重科","徐工","中国煤科太原院"], avgStartingSalary:"20-35万/年" }, admission:{ 2025:{score:603,rank:21662,enrollment:8}, 2024:{score:607,rank:21956,enrollment:8}, 2023:{score:599,rank:22724,enrollment:9}, 2022:{score:589,rank:23193,enrollment:8} } }
    ]
  },
  // ==================== 北京科技大学 ====================
  {
    id: "ustb", name: "北京科技大学", category: "STRONG_ENGINEERING", province: "北京", city: "北京",
    majors: [
      { id:"ustb-cs", name:"计算机类", category:"HOT_ENGINEERING", employment:{ industries:["互联网","AI","工业互联网"], roles:["软件工程师","AI工程师","工业互联网工程师"], typicalEmployers:["字节跳动","百度","用友","中科曙光"], avgStartingSalary:"26-45万/年" }, admission:{ 2025:{score:632,rank:8272,enrollment:9}, 2024:{score:636,rank:8632,enrollment:9}, 2023:{score:632,rank:9205,enrollment:11}, 2022:{score:621,rank:9783,enrollment:9} } },
      { id:"ustb-mse", name:"材料科学与工程", category:"CORE_ENGINEERING", employment:{ industries:["钢铁","新材料","高温合金"], roles:["材料工程师","冶金工程师","研发工程师"], typicalEmployers:["宝钢","首钢","中科院金属所","航材院"], avgStartingSalary:"22-40万/年" }, admission:{ 2025:{score:623,rank:11716,enrollment:12}, 2024:{score:627,rank:11962,enrollment:12}, 2023:{score:622,rank:12629,enrollment:14}, 2022:{score:612,rank:13112,enrollment:12} } },
      { id:"ustb-auto", name:"自动化类", category:"HOT_ENGINEERING", employment:{ industries:["智能制造","钢铁自动化","机器人"], roles:["自动化工程师","过程控制工程师","机器视觉工程师"], typicalEmployers:["首钢自动化","西门子","ABB","中冶集团"], avgStartingSalary:"24-42万/年" }, admission:{ 2025:{score:627,rank:10101,enrollment:9}, 2024:{score:630,rank:10776,enrollment:9}, 2023:{score:626,rank:11181,enrollment:10}, 2022:{score:615,rank:11978,enrollment:9} } },
      { id:"ustb-comm", name:"通信工程", category:"HOT_ENGINEERING", employment:{ industries:["通信","5G","物联网"], roles:["通信系统工程师","网络规划师","IoT工程师"], typicalEmployers:["华为北京","中兴","中国移动","大唐电信"], avgStartingSalary:"25-44万/年" }, admission:{ 2025:{score:629,rank:9339,enrollment:3}, 2024:{score:633,rank:9672,enrollment:3}, 2023:{score:628,rank:10487,enrollment:4}, 2022:{score:618,rank:10845,enrollment:3} } },
      { id:"ustb-mech", name:"机械类", category:"CORE_ENGINEERING", employment:{ industries:["钢铁机械","高端装备","机器人"], roles:["机械设计工程师","制造工程师","设备工程师"], typicalEmployers:["首钢机械","中冶京诚","ABB","北京精雕"], avgStartingSalary:"22-38万/年" }, admission:{ 2025:{score:623,rank:11716,enrollment:17}, 2024:{score:627,rank:11962,enrollment:17}, 2023:{score:622,rank:12629,enrollment:19}, 2022:{score:612,rank:13112,enrollment:17} } }
    ]
  },
  // ==================== 华东理工大学 ====================
  {
    id: "ecust", name: "华东理工大学", category: "STRONG_ENGINEERING", province: "上海", city: "上海",
    majors: [
      { id:"ecust-chem", name:"化学工程与工艺", category:"CORE_ENGINEERING", employment:{ industries:["化工","精细化工","新能源材料"], roles:["化工工程师","工艺工程师","研发科学家"], typicalEmployers:["中石化上海","巴斯夫","陶氏","万华化学"], avgStartingSalary:"24-44万/年" }, admission:{ 2025:{score:618,rank:13814,enrollment:10}, 2024:{score:622,rank:14164,enrollment:10}, 2023:{score:616,rank:14955,enrollment:12}, 2022:{score:606,rank:15644,enrollment:10} } },
      { id:"ecust-cs", name:"计算机类", category:"HOT_ENGINEERING", employment:{ industries:["互联网","AI","工业软件"], roles:["软件工程师","AI工程师","工业软件工程师"], typicalEmployers:["字节跳动","拼多多","携程","中望软件"], avgStartingSalary:"28-48万/年" }, admission:{ 2025:{score:632,rank:8272,enrollment:6}, 2024:{score:636,rank:8632,enrollment:6}, 2023:{score:632,rank:9205,enrollment:7}, 2022:{score:621,rank:9783,enrollment:6} } },
      { id:"ecust-ee", name:"电子信息类", category:"HOT_ENGINEERING", employment:{ industries:["通信","集成电路","人工智能"], roles:["嵌入式工程师","IC设计工程师","AI工程师"], typicalEmployers:["华为上海","中芯国际","展讯","复旦微电子"], avgStartingSalary:"26-46万/年" }, admission:{ 2025:{score:628,rank:9704,enrollment:8}, 2024:{score:631,rank:10413,enrollment:8}, 2023:{score:627,rank:10825,enrollment:9}, 2022:{score:616,rank:11601,enrollment:8} } },
      { id:"ecust-mse", name:"材料类（新材料实验班）", category:"CORE_ENGINEERING", employment:{ industries:["新材料","高分子","新能源材料"], roles:["材料工程师","高分子工程师","研发工程师"], typicalEmployers:["金发科技","万华化学","巴斯夫","陶氏"], avgStartingSalary:"22-40万/年" }, admission:{ 2025:{score:618,rank:13814,enrollment:8}, 2024:{score:622,rank:14164,enrollment:8}, 2023:{score:616,rank:14955,enrollment:10}, 2022:{score:606,rank:15644,enrollment:8} } },
      { id:"ecust-bio", name:"生物工程类", category:"TRADITIONAL_ENGINEERING", employment:{ industries:["生物制药","发酵工程","生物技术"], roles:["生物工程师","发酵工程师","研发科学家"], typicalEmployers:["药明康德","复星医药","诺维信","华大基因"], avgStartingSalary:"22-40万/年" }, admission:{ 2025:{score:618,rank:13814,enrollment:6}, 2024:{score:622,rank:14164,enrollment:6}, 2023:{score:618,rank:14158,enrollment:7}, 2022:{score:608,rank:14756,enrollment:6} } }
    ]
  },
  // ==================== 东华大学 ====================
  {
    id: "dhu", name: "东华大学", category: "STRONG_ENGINEERING", province: "上海", city: "上海",
    majors: [
      { id:"dhu-textile", name:"纺织类（纺织科学与工程）", category:"CORE_ENGINEERING", employment:{ industries:["纺织","服装","产业用纺织品"], roles:["纺织工程师","材料工程师","研发工程师"], typicalEmployers:["申洲国际","鲁泰纺织","恒力集团","安踏"], avgStartingSalary:"18-35万/年" }, admission:{ 2025:{score:610,rank:17774,enrollment:8}, 2024:{score:614,rank:18113,enrollment:8}, 2023:{score:606,rank:19346,enrollment:10}, 2022:{score:596,rank:20088,enrollment:8} } },
      { id:"dhu-mse", name:"材料类（纤维材料）", category:"CORE_ENGINEERING", employment:{ industries:["高性能纤维","复合材料","碳纤维"], roles:["纤维材料工程师","复合材料工程师","研发工程师"], typicalEmployers:["中复神鹰","光威复材","恒神股份","中材科技"], avgStartingSalary:"20-38万/年" }, admission:{ 2025:{score:612,rank:16680,enrollment:6}, 2024:{score:616,rank:17064,enrollment:6}, 2023:{score:609,rank:18012,enrollment:7}, 2022:{score:599,rank:18752,enrollment:6} } },
      { id:"dhu-cs", name:"计算机类", category:"HOT_ENGINEERING", employment:{ industries:["互联网","AI","智能制造"], roles:["软件工程师","AI工程师","数据分析师"], typicalEmployers:["字节跳动","拼多多","得物","哔哩哔哩"], avgStartingSalary:"26-46万/年" }, admission:{ 2025:{score:618,rank:13814,enrollment:5}, 2024:{score:621,rank:14632,enrollment:5}, 2023:{score:615,rank:15374,enrollment:6}, 2022:{score:605,rank:16088,enrollment:5} } },
      { id:"dhu-ee", name:"电子信息类", category:"HOT_ENGINEERING", employment:{ industries:["通信","物联网","智能制造"], roles:["嵌入式工程师","通信工程师","IoT工程师"], typicalEmployers:["华为上海","中芯国际","华虹","中微半导体"], avgStartingSalary:"24-44万/年" }, admission:{ 2025:{score:616,rank:14761,enrollment:5}, 2024:{score:619,rank:15562,enrollment:5}, 2023:{score:612,rank:16669,enrollment:6}, 2022:{score:602,rank:17419,enrollment:5} } },
      { id:"dhu-env", name:"环境工程", category:"TRADITIONAL_ENGINEERING", employment:{ industries:["纺织环保","水处理","碳中和"], roles:["环境工程师","印染废水处理工程师","碳管理师"], typicalEmployers:["中节能","威立雅","申洲国际","鲁泰"], avgStartingSalary:"16-30万/年" }, admission:{ 2025:{score:610,rank:17774,enrollment:3}, 2024:{score:614,rank:18113,enrollment:3}, 2023:{score:608,rank:18438,enrollment:4}, 2022:{score:598,rank:19198,enrollment:3} } }
    ]
  },
  // ==================== 北京工业大学 ====================
  {
    id: "bjut", name: "北京工业大学", category: "STRONG_ENGINEERING", province: "北京", city: "北京",
    majors: [
      { id:"bjut-cs", name:"计算机科学与技术", category:"HOT_ENGINEERING", employment:{ industries:["互联网","AI","智慧城市"], roles:["软件工程师","AI工程师","大数据工程师"], typicalEmployers:["字节跳动","百度","京东","小米"], avgStartingSalary:"26-45万/年" }, admission:{ 2025:{score:620,rank:12979,enrollment:6}, 2024:{score:623,rank:13702,enrollment:6}, 2023:{score:617,rank:14539,enrollment:7}, 2022:{score:607,rank:15200,enrollment:6} } },
      { id:"bjut-ee", name:"电子信息工程", category:"HOT_ENGINEERING", employment:{ industries:["通信","集成电路","智能硬件"], roles:["硬件工程师","嵌入式开发","芯片验证工程师"], typicalEmployers:["京东方","北方华创","小米","中芯国际"], avgStartingSalary:"24-42万/年" }, admission:{ 2025:{score:620,rank:12979,enrollment:5}, 2024:{score:623,rank:13702,enrollment:5}, 2023:{score:617,rank:14539,enrollment:6}, 2022:{score:607,rank:15200,enrollment:5} } },
      { id:"bjut-civil", name:"土木类", category:"TRADITIONAL_ENGINEERING", employment:{ industries:["建筑","抗震","城市更新"], roles:["结构工程师","抗震工程师","BIM工程师"], typicalEmployers:["北京建工","中建","北京城建","万科"], avgStartingSalary:"20-36万/年" }, admission:{ 2025:{score:614,rank:15739,enrollment:8}, 2024:{score:618,rank:16027,enrollment:8}, 2023:{score:613,rank:16198,enrollment:10}, 2022:{score:603,rank:16975,enrollment:8} } },
      { id:"bjut-mse", name:"材料科学与工程", category:"CORE_ENGINEERING", employment:{ industries:["新材料","电子材料","半导体"], roles:["材料工程师","电子材料工程师","研发工程师"], typicalEmployers:["中芯国际","京东方","北方华创","有研新材"], avgStartingSalary:"22-38万/年" }, admission:{ 2025:{score:615,rank:15239,enrollment:6}, 2024:{score:619,rank:15562,enrollment:6}, 2023:{score:613,rank:16198,enrollment:7}, 2022:{score:602,rank:17419,enrollment:6} } },
      { id:"bjut-mech", name:"机械类", category:"CORE_ENGINEERING", employment:{ industries:["高端装备","智能制造","机器人"], roles:["机械设计工程师","制造工程师","机器人工程师"], typicalEmployers:["北汽","小米汽车","ABB","北京精雕"], avgStartingSalary:"22-38万/年" }, admission:{ 2025:{score:615,rank:15239,enrollment:7}, 2024:{score:619,rank:15562,enrollment:7}, 2023:{score:613,rank:16198,enrollment:8}, 2022:{score:602,rank:17419,enrollment:7} } }
    ]
  },
  // ==================== 上海大学 ====================
  {
    id: "shu", name: "上海大学", category: "STRONG_ENGINEERING", province: "上海", city: "上海",
    majors: [
      { id:"shu-cs", name:"计算机科学与技术（理学工学Ⅰ类）", category:"HOT_ENGINEERING", employment:{ industries:["互联网","AI","金融科技"], roles:["软件工程师","AI工程师","区块链工程师"], typicalEmployers:["字节跳动","拼多多","哔哩哔哩","微众银行"], avgStartingSalary:"28-48万/年" }, admission:{ 2025:{score:618,rank:13814,enrollment:10}, 2024:{score:622,rank:14164,enrollment:10}, 2023:{score:616,rank:14955,enrollment:12}, 2022:{score:606,rank:15644,enrollment:10} } },
      { id:"shu-ee", name:"电子信息类（未来技术学院）", category:"HOT_ENGINEERING", employment:{ industries:["通信","集成电路","AI"], roles:["芯片设计工程师","嵌入式开发","AI工程师"], typicalEmployers:["华为上海","中芯国际","展讯","华大半导体"], avgStartingSalary:"28-48万/年" }, admission:{ 2025:{score:626,rank:10486,enrollment:8}, 2024:{score:629,rank:11205,enrollment:8}, 2023:{score:625,rank:11536,enrollment:9}, 2022:{score:614,rank:12356,enrollment:8} } },
      { id:"shu-comm", name:"通信工程（理学工学Ⅱ类）", category:"HOT_ENGINEERING", employment:{ industries:["通信","5G","物联网"], roles:["通信系统工程师","IoT工程师","网络规划师"], typicalEmployers:["华为上海","中兴","诺基亚上海贝尔","中国移动"], avgStartingSalary:"25-45万/年" }, admission:{ 2025:{score:618,rank:13814,enrollment:8}, 2024:{score:622,rank:14164,enrollment:8}, 2023:{score:616,rank:14955,enrollment:10}, 2022:{score:606,rank:15644,enrollment:8} } },
      { id:"shu-mech", name:"机械工程（理学工学Ⅲ类）", category:"CORE_ENGINEERING", employment:{ industries:["汽车","高端装备","机器人"], roles:["机械设计工程师","制造工程师","机器人工程师"], typicalEmployers:["上汽","特斯拉","ABB","发那科"], avgStartingSalary:"22-40万/年" }, admission:{ 2025:{score:620,rank:12979,enrollment:10}, 2024:{score:625,rank:12825,enrollment:10}, 2023:{score:620,rank:13386,enrollment:12}, 2022:{score:609,rank:14312,enrollment:10} } },
      { id:"shu-mse", name:"材料科学与工程（理学工学Ⅱ类）", category:"CORE_ENGINEERING", employment:{ industries:["新材料","金属材料","增材制造"], roles:["材料工程师","3D打印工程师","研发工程师"], typicalEmployers:["宝钢","上海材料所","铂力特","中国商飞"], avgStartingSalary:"20-38万/年" }, admission:{ 2025:{score:618,rank:13814,enrollment:8}, 2024:{score:623,rank:13702,enrollment:8}, 2023:{score:617,rank:14539,enrollment:10}, 2022:{score:607,rank:15200,enrollment:8} } }
    ]
  }
];
