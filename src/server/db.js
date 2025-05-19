export const Demonstrationarea = {
  title:"示范区国土空间总体规划",
  data:
  {
    Targeting:{
      title:"目标定位",
      slogan:"世界级水乡人居文明典范",
      smallSlogan:"共生、共荣、共进、共鸣、共享",
      peculiarity:[
        {
          id:0,
          test:'跨省域',
        },
        {
          id:2,
          test:'最江南',
        },
        {
          id:3,
          test:'超级都市圈',
        }
      ]
    },
    Special:{
      title:'专项规划',
      data:[{ title:'文化和旅游发展专项规划',id:0 },{title:'综合交通专项规划',id:1},{title:'水利专项规划',id:2},{title:'供排水专项规划',id:3}]
    },
    ecologicalData:{
      total: 380,
      title: '总计人口',
      data:[
        { label: '数据一', value: 160, percentage: 42.6, unit: 'xx', id:0 },
        { label: '数据二', value: 130, percentage: 37.5, unit: 'xx', id:1 },
        { label: '数据三', value: 90, percentage: 19.9, unit: 'xx' , id:2 }
      ]
    },
    ProportionUse:[
      {title:'建筑用地',land:31.4,id:0},
      {title:'蓝绿空间',land:26.8,id:1},
      {title:'蓝绿空间',land:45.6,id:2},
    ],
    structure:[
      {id:0, title: '生态结构' , space:[{title:'一心',id:0},{title:'两廊',id:1},{title:'三链',id:2},{title:'四区',id:3}]},
      {id:1, title:'空间结构', space:[{title:'两核', id:0}, {title: '四带', id:1},{title: '五片', id:2}]}
    ]
  }
}

export const AdvanceStartZone = {
  title:'先行启动区国土空间总体规划',
  population:{
    title: '常驻人口',
    ecologicalData:{
      title:'总计人口',
      total: 80,
      data:[
        { label: '数据一', value: 160, percentage: 42.6, unit: 'xx' },
        { label: '数据二', value: 130, percentage: 37.5, unit: 'xx' },
        { label: '数据三', value: 90, percentage: 19.9, unit: 'xx' }
      ]
    }
  },
  structure:{
    title: '空间结构',
    data:[
      {id:0, title: '一厅三片', icon: ''},
      {id:1, title: '十字双轴', icon: ''},
      {id:2, title: '小镇网格', icon: ''}
    ]
  },
  site:{
    title: '用地比重',
    data:[
      { title: '建筑用地', land:24 , icon:'', id:0 },
      { title: '蓝绿空间', land:75 , icon:'', id:1 },
    ]
  }
}

export const WaterTownshipUnit = {
  title: '水乡单元详细规划',
  data:[{
  text: "规划单元总数",
  image: {
    src: '../src/assets/images/P15.png',
    alt: ''
  },
  count:50

},
{
  text: "在编规划数量",
  image: {
    src: '../src/assets/images/P13.png',
    alt: ''
  },
  count:1

},

{
  text: "已批规划数量",
  image: {
    src: '../src/assets/images/P12.png',
    alt: ''
  },
  count:0
},
]
}

export const buttonData = {
  data:[
    {title: '目标定位', icon: '', id: 0},
    {title: '空间结构', icon: '', id: 1},
    {title: '生态结构', icon: '', id: 2},
    {title: '主要交通', icon: '', id: 3},
    {title: '核心指标', icon: '', id: 4},
  ]
}

export const Ecologicalprotection = {
  title: '生态保护红线',
  total: 80,
  centerTitle:'数据数据',
  data:[
        { label: '数据一', value: 160, percentage: 42.6, unit: 'xx' },
        { label: '数据二', value: 130, percentage: 37.5, unit: 'xx' },
        { label: '数据三', value: 90, percentage: 19.9, unit: 'xx' }
      ]
}

export const FarmlandHoldings = {
  title: '永久基本农田保有量',
  total: 80,
  centerTitle: '总计人数',
  data:[
        { label: '数据一', value: 160, percentage: 42.6, unit: 'xx' },
        { label: '数据二', value: 130, percentage: 37.5, unit: 'xx' },
        { label: '数据三', value: 90, percentage: 19.9, unit: 'xx' }
      ]
}
export const BlueGgreenspace = {
  title: '蓝绿空间占比',
  data:{
    xAxisdata: ['数据一', '数据二', '数据三', '数据四', '数据五'],
    seriesdata: [
                {
                  id:1,
                  name: '数据二',
                  data: [50, 59, 85, 41, 70],
                  color: '#56CC9F',
                  offsetColor: 'rgba(134, 197, 139,0.1)'
                },
                {
                  name: '数据三',
                  data: [76, 48, 64, 70, 48],
                  color: '#B88A5C',
                  offsetColor: 'rgba(203, 180, 68,0.1)'
                }
              ]
  }
}

export const WaterSurfacerate = {
  title: '河面水面率',
  data:[
    { title: '数据一', value: 78.5, id: 0 , icon:'../src/assets/images/P24.svg'},
    {title: '数据一', value: 6.2, id: 1 , icon:'../src/assets/images/P26.svg'}
  ]
}

export const Widthgreen = {
  title: '清水绿廊管控宽度',
  data:{
    xAxisdata:['数据一', '数据二', '数据三', '数据四', '数据五'],
    seriesdata: [
                {
                  id: 1,
                  name: '数据二',
                  data: [50, 59, 85, 41, 70],
                  color: '#56CC9F',
                  offsetColor: 'rgba(134, 197, 139,0.1)'
                },
                {
                  id:2,
                  name: '数据三',
                  data: [76, 48, 64, 70, 48],
                  color: '#5ABBB4',
                  offsetColor: 'rgba(83, 169, 203,0.1)'
                }
              ]
  }
}

export const Coverage = {
    data:[
      { title: '森林覆盖率', land:12 , icon:'', id:0 },
      { title: '重要生境保护程度水质达标率', land:87 , icon:'', id:1 },
      { title: '水体功能区水质达标率', land:100 , icon:'', id:2 },

    ]
}