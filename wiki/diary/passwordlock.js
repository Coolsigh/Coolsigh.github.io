        var lk = 0;
        var str;
        var tme = 1800;
        var gdz = 0;
        function onclicknum(nums)
            {
                str = document.getElementById("pwd");
                str.value = str.value + nums;
            }
        function check()
            {
                if (str.value == 2481632641281234)
                    {
                        alert ("密钥正确.");
                        opfst();
                    }
                else
                    {
                        checklock();
                    }
            }
        function checklock()
            {
                if (lk != 5)
                    {
                        lk++;
                        alert ("密钥错误, 还有" + (5 - lk) + "次机会. \n您输入的密钥是:" + str.value + ". \n请检查您输入的密钥是否正确.");
                    }
                else
                    {
                    }
                if (lk == 5)
                    {
                        alert ("已锁定  请在30分钟后重试");
                        document.getElementById("bt").style.display='none';
                        document.getElementById("lkd").style.display='block';
                        setTimeout ("rst()",1800000);
                        countdown();
                    }
                else {}
            }
        function countdown()
            {
                var itv1 = setInterval ("countd()",1000);
            }
        function countd()
            {
                tme--;
                if (tme == 0)
                    {
                        window.clearInterval(itv1)
                        tme = 1800;
                    }
            }
        function restctdn()
            {
                alert ("已锁定. 请在" + tme + "秒后重试.");
            }
        function rst()
            {
                alert ("请重试");
                lk = 0;
                document.getElementById("bt").style.display='block';
                document.getElementById("lkd").style.display='none';
            }
        function onclickbackspace()
            {
                var t = document.getElementById("nummmessage");
                str.value = str.value.substr(0,str.value.length-1);
            }
        function opfst()
            {
                document.body.style.backgroundColor='#ffffff';
                var hone = document.getElementById('thdo');
                document.getElementById("1").style.display='none';
                document.getElementById("2").style.display='none';
                document.getElementById("3").style.display='none';
                document.getElementById("4").style.display='none';
                document.getElementById("5").style.display='none';
                document.getElementById("6").style.display='none';
                document.getElementById("7").style.display='none';
                document.getElementById("8").style.display='none';
                document.getElementById("9").style.display='none';
                document.getElementById("0").style.display='none';
                document.getElementById("bksps").style.display='none';
                document.getElementById("pwd").style.display='none';
                document.getElementById("bt").style.display='none';
                document.getElementById("ff").style.display='none';
            }