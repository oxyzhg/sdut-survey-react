const initialState = [
  {
    id: 1,
    catid: 7,
    question: '你对大学网贷的看法是()',
    type: 1,
    answers: [
      {
        value: 'A',
        label: '能够为急需资金的同学解决困难，只要能正常还上，没什么问题'
      },
      {
        value: 'B',
        label: '大多数网贷平台都存在违规行为，大学生还是不要贷的好'
      },
      {
        value: 'C',
        label: '大学生要形成正确的消费观，合理规划资金使用'
      },
      {
        value: 'D',
        label: '大学生的社会经验还不足，最好不要网贷'
      }
    ],
    created_at: '2018-06-07 15:54:32',
    updated_at: '2018-06-07 15:54:32'
  },
  {
    id: 2,
    catid: 7,
    question: '你觉得自己现在的大学生活状态是()',
    type: 2,
    answers: [
      {
        value: 'A',
        label: '有所进步，但未达到预期'
      },
      {
        value: 'B',
        label: '积极向上，充满希望'
      },
      {
        value: 'C',
        label: '无所事事，随波逐流'
      },
      {
        value: 'D',
        label: '心情压抑，无聊透顶'
      }
    ],
    created_at: '2018-06-07 15:54:32',
    updated_at: '2018-06-07 15:54:32'
  },
  {
    id: 3,
    catid: 7,
    question: '你对大学网贷的看法是()',
    type: 1,
    answers: [
      {
        value: 'A',
        label: '能够为急需资金的同学解决困难，只要能正常还上，没什么问题'
      },
      {
        value: 'B',
        label: '大多数网贷平台都存在违规行为，大学生还是不要贷的好'
      },
      {
        value: 'C',
        label: '大学生要形成正确的消费观，合理规划资金使用'
      },
      {
        value: 'D',
        label: '大学生的社会经验还不足，最好不要网贷'
      }
    ],
    created_at: '2018-06-07 15:54:32',
    updated_at: '2018-06-07 15:54:32'
  },
  {
    id: 4,
    catid: 7,
    question: '你觉得自己现在的大学生活状态是()',
    type: 2,
    answers: [
      {
        value: 'A',
        label: '有所进步，但未达到预期'
      },
      {
        value: 'B',
        label: '积极向上，充满希望'
      },
      {
        value: 'C',
        label: '无所事事，随波逐流'
      },
      {
        value: 'D',
        label: '心情压抑，无聊透顶'
      }
    ],
    created_at: '2018-06-07 15:54:32',
    updated_at: '2018-06-07 15:54:32'
  },
  {
    id: 5,
    catid: 7,
    question: '你对学校还有什么好的建议和想法？',
    type: 3,
    created_at: '2018-06-07 15:54:32',
    updated_at: '2018-06-07 15:54:32'
  }
];

const questions = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default questions;
