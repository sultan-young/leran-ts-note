/**
 * 通过MessageDecorator装饰器，使登录和注销模块都具备了发送消息的功能
 */
const MessageDecorator: ClassDecorator = (target) => {
    target.prototype.message = (content: string) => {
        console.log(`系统消息：${content}`)
    }
}

@MessageDecorator
class LoginController {
    public login() {
        this.message('登录成功');
    }
}

@MessageDecorator
class LogoutController {
    public logout() {
        this.message('注销成功')
    }
}

new LoginController().login()
new LogoutController().logout()