module.exports = {
  docs: [
    {
      type: 'link',
      label: 'Home',
      href: '/',
    },
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'create/index-create'
      ]
    },
    {
      type: 'category',
      label: 'Develop',
      items: [
        'develop/index-develop',
        {
          type: 'category',
          label: 'Java',
          items: [
            'develop/java/index-java',
            {
              type: 'category',
              label: 'Spring',
              items: [
                'develop/java/spring/index-spring',
                {
                  type: 'category',
                  label: 'Redis and Spring Course',
                  items: [
                    'develop/java/spring/redis-and-spring-course/index-redis-and-spring-course',
                  ]
                },
                {
                  type: 'category',
                  label: 'Rate Limiting',
                  items: [
                    'develop/java/spring/rate-limiting/index-ratelimiting',
                    {
                      type: 'category',
                      label: 'Fixed Window',
                      items: [
                        'develop/java/spring/rate-limiting/fixed-window/index-fixed-window',
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
     ]
    },
    {
      type: 'category',
      label: 'Consume',
      items: [
        'explore/index-explore',
        {
         type: 'category',
         label: 'RedisInsight',
         items: [
          'explore/redisinsight/index-redisinsight',
        ]
        },
          'explore/redisdatasource/index-redisdatasource',
     ]
    },
      {
          type: 'category',
          label: 'Stats',
          items: [
              'get-involved/index-getinvolved',
          ]
      },
    {
      type: 'category',
      label: 'FAQ',
      items: [
           'howtos/index-howtos',
           {
             type: 'category',
             label: 'RedisJSON Tutorial',
             items: [
                  'howtos/redisjson/index-redisjson',
             ]
           },
           'howtos/chatapp/index-chatapp',
       ]
     },

    {
      type: 'category',
      label: 'Get Support',
      items: [
        'get-involved/index-getinvolved',
        {
          type: 'category',
          label: 'Hacktoberfest 2021',
          items: [
            'get-involved/hacktoberfest/index-hacktoberfest',
          ]
        }, 
        'get-involved/discord/index-discord',
      ]
    },


]
};
