import { DayPlan, FoodItem, PreparationItem, TimeOfDay } from './types';

export const ITINERARY_DATA: DayPlan[] = [
  {
    dayTitle: 'Day 1',
    subtitle: '古韵探秘与湖畔浪漫',
    keywords: ['博物馆宝藏', '云龙山索道', '日落晚霞', '地锅鸡'],
    activities: [
      {
        time: TimeOfDay.MORNING,
        title: '睡个懒觉 & 碳水早餐',
        description: '推荐去马市街飠它（shá）汤。点一碗乾隆下江南时赞不绝口的飠它汤，配上八股油条或素煎包。暖胃又舒服。',
        location: '马市街',
        tags: ['早餐', '老字号'],
        imagePlaceholder: 'https://picsum.photos/400/300?random=1',
        highlight: '徐州早餐“扛把子”'
      },
      {
        time: TimeOfDay.MORNING,
        title: '徐州博物馆 (需预约)',
        description: '馆藏非常丰富，有“金缕玉衣”等国宝级文物。就在云龙山脚下，不用奔波。设计很大气，适合慢慢逛。',
        location: '徐州博物馆',
        tags: ['文化', '历史'],
        imagePlaceholder: 'https://picsum.photos/400/300?random=2',
        highlight: '记得提前3-7天预约'
      },
      {
        time: TimeOfDay.NOON,
        title: '本地特色午餐',
        description: '在博物馆附近的富国街或丰储街觅食。这里是徐州小吃聚集地。',
        location: '富国街/丰储街',
        tags: ['美食街', '小吃'],
        imagePlaceholder: 'https://picsum.photos/400/300?random=3',
        highlight: '推荐：周记把子肉、老郑烤肉筋'
      },
      {
        time: TimeOfDay.AFTERNOON,
        title: '云龙山 & 索道看景',
        description: '不需要辛苦爬山。去云龙山索道乘坐敞开式缆车上山。非常适合情侣，省力且出片。山顶观景台可俯瞰“一城青山半城湖”。',
        location: '云龙山索道',
        tags: ['风景', '浪漫', '缆车'],
        imagePlaceholder: 'https://picsum.photos/400/300?random=4'
      },
      {
        time: TimeOfDay.EVENING,
        title: '云龙湖日落 & 泛舟',
        description: '下山后就是云龙湖风景区。推荐去沉水廊道或苏公塔附近散步。如果天气好，一定要在湖边等日落，或者租电动船泛舟。',
        location: '云龙湖',
        tags: ['日落', '散步', '游船'],
        imagePlaceholder: 'https://picsum.photos/400/300?random=5',
        highlight: '氛围感拉满'
      },
      {
        time: TimeOfDay.NIGHT,
        title: '必吃地锅鸡 & 回龙窝',
        description: '晚餐必吃地锅鸡（喝饼沾汤是灵魂）。饭后去回龙窝历史文化街区消食，有“城下城”博物馆，古风韵味十足。',
        location: '回龙窝',
        tags: ['晚餐', '夜景', '古街'],
        imagePlaceholder: 'https://picsum.photos/400/300?random=6'
      }
    ]
  },
  {
    dayTitle: 'Day 2',
    subtitle: '汉代史诗与祈福打卡',
    keywords: ['兵马俑', '网红寺庙', '烧烤夜宵'],
    activities: [
      {
        time: TimeOfDay.MORNING,
        title: '辣汤 & 汉文化景区',
        description: '早餐尝尝“两来风”的辣汤和煎包。随后前往狮子山楚王陵，看汉兵马俑（比西安的更袖珍写意）和水下兵马俑博物馆。',
        location: '汉文化景区',
        tags: ['文化', '震撼'],
        imagePlaceholder: 'https://picsum.photos/400/300?random=7',
        highlight: '了解“两来风”文化核心'
      },
      {
        time: TimeOfDay.NOON,
        title: '徐州肉酱米线',
        description: '尝试徐州特色的肉酱米线，骨汤浓郁，肉酱给得超足。',
        location: '市区',
        tags: ['午餐', '米线'],
        imagePlaceholder: 'https://picsum.photos/400/300?random=8',
        highlight: '推荐：魏记米线、建国米线'
      },
      {
        time: TimeOfDay.AFTERNOON,
        title: '宝莲寺祈福拍照',
        description: '打卡国内最高的佛阁“通天阁”，建筑风格宏伟独特（唐风+印度风）。非常出片，是网红打卡地。还能吃里面的素面。',
        location: '宝莲寺',
        tags: ['拍照', '祈福', '建筑'],
        imagePlaceholder: 'https://picsum.photos/400/300?random=9'
      },
      {
        time: TimeOfDay.NIGHT,
        title: '徐州烧烤 & 壹捌夜市',
        description: '离开前必须安排一顿徐州烧烤！羊肉现切现烤，裹在烙馍里吃。如果还有精力，去壹捌夜市感受烟火气。',
        location: '夜市',
        tags: ['烧烤', '夜宵'],
        imagePlaceholder: 'https://picsum.photos/400/300?random=10',
        highlight: '特色：大乎辣椒大乎油'
      }
    ]
  }
];

export const FOOD_GUIDE: FoodItem[] = [
  {
    name: '地锅鸡',
    description: '徐州名片！锅边贴的饼（喝饼）沾着汤汁是灵魂。',
    recommendations: ['老家地锅'],
    tag: 'Must Eat',
    imagePlaceholder: 'https://picsum.photos/400/300?random=11'
  },
  {
    name: '徐州烧烤',
    description: '“大乎辣椒大乎油”是特色，羊肉串现切现烤，必点。',
    recommendations: ['三只羊烧烤', '方方烧烤', '绿地烧烤'],
    tag: 'Must Eat',
    imagePlaceholder: 'https://picsum.photos/400/300?random=12'
  },
  {
    name: '飠它 (Shá) 汤',
    description: '乾隆下江南赞不绝口，配八股油条或素煎包。',
    recommendations: ['马市街'],
    tag: 'Snack',
    imagePlaceholder: 'https://picsum.photos/400/300?random=13'
  },
  {
    name: '把子肉',
    description: '肥而不腻，非常下饭。',
    recommendations: ['周记把子肉'],
    tag: 'Must Eat',
    imagePlaceholder: 'https://picsum.photos/400/300?random=14'
  },
  {
    name: '肉酱米线',
    description: '骨汤浓郁，肉酱给得超足。备注辣度！',
    recommendations: ['魏记米线', '建国米线'],
    tag: 'Snack',
    imagePlaceholder: 'https://picsum.photos/400/300?random=15'
  }
];

export const PREPARATION_TIPS: PreparationItem[] = [
  {
    category: '住宿',
    title: '苏宁广场/彭城广场附近',
    content: '市中心，交通便利（地铁1/2号线交汇）。苏宁凯悦酒店可俯瞰夜景。',
    icon: 'hotel'
  },
  {
    category: '预约',
    title: '徐州博物馆',
    content: '非常火爆！务必提前3-7天在公众号预约（周一闭馆）。',
    icon: 'ticket',
    urgent: true
  },
  {
    category: '交通',
    title: '打车或共享电动车',
    content: '景点集中，打车便宜。骑电动车穿梭林荫道体验感很好。',
    icon: 'bike'
  },
  {
    category: '避坑',
    title: '关于吃辣 & 饭店',
    content: '徐州菜偏咸辣，不能吃辣记得备注“微辣/微微辣”。避开景区饭店，去富国街/丰储街。',
    icon: 'warning',
    urgent: true
  }
];