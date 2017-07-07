/**
 * Created by Administrator on 2017/5/25.
 */
import message from '~/config/message'
/**
 * 打印错误对象，并显示layouts/error页面
 * @param e catch的错误
 * @param toErrorLayout 上下文error对象
 */
export default function (e,toErrorLayout) {
    console.error(e);
    toErrorLayout({ message: message.error })
}