export default function ({ app , req , redirect , route }) {
    if(route.name=='index'){
        return redirect('/demo')
    }
    if(true) return false;
    redirect({ path: '//baidu.com' })
}
  