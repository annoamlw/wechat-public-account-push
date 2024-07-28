/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
    USE_PASSAGE: 'push-deer',
    "APP_ID": "wxfffe83633c47f36a",
    "APP_SECRET": "6dffbb63f057680f245c0c4cf565c9ce",
    "IS_SHOW_COLOR": true,
    "CALLBACK_TEMPLATE_ID": "",
    "CALLBACK_USERS": [
        {
            "name": "自己",
            "id": ""
        }
    ],
    "USERS": [
        {
            "name": "宝宝",
            "id": "PDU31275TRj1PAi78jS30ZIxkJXyh6MYhzbBNVTQc",
            "useTemplateId": "0001",
            "province": "福建",
            "city": "泉州",
            "horoscopeDate": "11-30",
            "horoscopeDateType": "本周",
            "openUrl": "https://cdxiaodong.life/",
            "festivals": [
                {
                    "type": "节日",
                    "name": "恋爱纪念日",
                    "date": "07-01",
                    "year": "2024"
                }
            ],
            "customizedDateList": [
                {
                    "keyword": "恋爱纪念日",
                    "date": "2024-07-01"
                }
            ]
        }
    ],
    "SWITCH": {
        "weather": true,
        "holidaytts": true,
        "CIBA": true,
        "oneTalk": false,
        "earthyLoveWords": false,
        "momentCopyrighting": false,
        "poisonChickenSoup": false,
        "poetry": false,
        "horoscope": false,
        "birthdayMessage": true
    }
}

module.exports = USER_CONFIG

