window.addEventListener('load', function() {
    console.log(11);

    var loginbox = document.querySelector('.loginbox');
    var form = loginbox.querySelector('form');
    var username = form.querySelector('.username');
    var password = form.querySelector('.passwordbox');
    var delete1 = form.querySelector('.del-ico1');
    var delete2 = form.querySelector('.del-ico2');
    console.log(delete2);

    var eyeopen = form.querySelector('.eye-open');
    var eyeclose = form.querySelector('.eye-close');
    var btn = form.querySelector('.button');
    // 用户名框
    delete1.addEventListener('click', function() {
        username.value = '请输入手机号/用户名/邮箱';
        delete1.style.display = 'none';
    });
    username.addEventListener('focus', function() {
        if (this.value === '请输入手机号/用户名/邮箱') {
            this.value = '';
            delete1.style.display = 'block';


        }
        this.style.color = 'black';

    });

    username.addEventListener('blur', function() {
        if (this.value === '') {
            this.value = '请输入手机号/用户名/邮箱';
            delete1.style.display = 'none';


        }
        this.style.color = '#ccc';

    });

    // 密码框
    if (password.type = 'text') {
        eyeopen.style.display = 'block';
        eyeclose.style.display = 'none';
    } else if (password.type = 'password') {
        eyeopen.style.display = 'none';
        eyeclose.style.display = 'block';
    }
    delete2.addEventListener('click', function() {
        password.type = 'text';
        password.value = '请输入密码';
        delete2.style.display = 'none';
    });
    password.addEventListener('focus', function() {
        if (this.value === '请输入密码') {
            this.value = '';

            password.type = 'password';


        }
        this.style.color = 'black';

        delete2.style.display = 'block';


    });
    password.addEventListener('blur', function() {
        if (this.value === '') {
            this.value = '请输入密码';
            password.type = 'text';
            delete2.style.display = 'none';
            eyeopen.style.display = 'none';
            eyeclose.style.display = 'block';



        }

        this.style.color = '#ccc';

    });
    // 密码显示与密码隐藏
    eyeclose.addEventListener('click', function() {
        eyeopen.style.display = 'block';
        eyeclose.style.display = 'none';
        password.type = 'text';

    });
    eyeopen.addEventListener('click', function() {
        eyeopen.style.display = 'none';
        eyeclose.style.display = 'block';
        password.type = 'password';
    });







});