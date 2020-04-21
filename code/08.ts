enum HttpCode {
        /** 成功 */
        '200_OK' = 200,
        /** 已生成了新的资源 */
        '201_Created' = 201,
        /** 请求稍后会被处理 */
        '202_Accepted' = 202,
        /** 资源已经不存在 */
        '204_NoContent' = 204,
        /** 被请求的资源有一系列可供选择的回馈信息 */
        '300_MultipleChoices' = 300,
        /** 永久性转移 */
        '301_MovedPermanently' = 301,
        /** 暂时性转移 */
        '302_MoveTemporarily' = 302,
    }
    HttpCode['200_OK']
    HttpCode[200]
    