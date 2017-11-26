$(function(){
    let myScroll=new IScroll('.singerlist',{
        click:true
    });
    let myScroll1=new IScroll('.ranklist',{
        click:true
    });
    let myScroll2=new IScroll('.oftenlist',{
        click:true
    });
    let myScroll3=new IScroll('.recommendlist',{
        click:true
    });
    /*let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });*/
    //////////////////////页面显示////////////////////////////////////////////
    let singerList=$('.singerlist>.scroll');
    let singerData=[];
    $.ajax('/php/ktv/index.php/singer/query',{
        method:'post',
        dataType:'json',
        success:function(data){
            render(singerList,data);
            myScroll=new IScroll('.singerlist');
        }
    })
    function render(obj,data){
        obj.empty();
        let str='';
        for(let i=0;i<data.length;i++){
            str+=`
        <li data='${JSON.stringify(data[i])}'>
            <a href="/php/ktv/index.php/singer/select?sid=${data[i]['sid']}">
                <img src="${data[i]['simg']}" alt="" name="simg">
                <div class="shadow">
                    <span class="sname">${data[i]['sname']}</span>
                </div>
            </a>      
        </li>
            `;
        }
        obj.html(str);
    }
    let rankList=$('.ranklist>.scroll');
    let rankData=[];
    $.ajax('/php/ktv/index.php/rank/query',{
        method:'post',
        dataType:'json',
        success:function(data){
            rankData=data.filter(element=>{
                return element;
            });
            renders(rankList,rankData);
            myScroll1=new IScroll('.ranklist');
        }
    })
    function renders(obj,data){
        obj.empty();
        let str='';
        for(let i=0;i<data.length;i++){
            str+=`
        <li>
        <span id="touxiang"><img src="${data[i]['gimg']}" alt=""></span>
        <div class="son">
            <span>${data[i]['gname']}</span>
            <span>${data[i]['gtime']}</span>
        </div>
        </li>
            `;
        }
        obj.html(str);
    }
    let oftenList=$('.oftenlist>.scroll');
    let oftenData=[];
    $.ajax('/php/ktv/index.php/rank/query',{
        method:'post',
        dataType:'json',
        success:function(data){
            renderss(oftenList,data);
            myScroll=new IScroll('.oftenlist');
        }
    })
    function renderss(obj,data){
        obj.empty();
        let str='';
        for(let i=0;i<data.length;i++){
            str+=`
        <li>
        <span id="touxiang"><img src="${data[i]['gimg']}" alt=""></span>
        <div class="son">
            <span>${data[i]['gname']}</span>
            <span>${data[i]['gtime']}</span>
        </div>
        </li>
            `;
        }
        obj.html(str);
    }
/////////////////////////////NAV选项卡////////////////////////////////////////////
    $("nav>li").click(function(){
        $(this).addClass("active").siblings().removeClass("active"); //切换选中的按钮高亮状态
        var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
        console.log(index);
        $(".container >.content").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
    });
    let lis=$('.ranksort>li');
    $(lis).on('click',function(){
        $(this).addClass("actives").siblings().removeClass("actives");
    })
//////////////////////////////查找//////////////////////////////////////
    let search=document.querySelector('#search');
    let aside=document.querySelector('.aside');
    let conli=document.querySelector('.singerlist>.scroll');
    let info=[
        {name:'内地',py:'neidi'},
        {name:'港台',py:'neidi'},
        {name:'欧美',py:'neidi'},
        {name:'日本',py:'neidi'},
        {name:'韩国',py:'neidi'},
        {name:'其他',py:'neidi'},
    ]
    renderr(info);
    let dts=document.querySelectorAll('.singerlist>.scroll>li');
    console.log(dts)
    let arr=[];
    let heights=document.querySelector('header').offsetHeight;
    dts.forEach(element=>arr.push(element.offsetTop));
    window.onscroll=function(){
        let st=document.documentElement.scrollTop||document.body.scrollTop;
        arr.forEach((element,index)=>{
            if(st+heights>=element){
//                    tip.innerText=dts[index].innerText;
            }
        })
    }
    search.onkeyup=function(){
        let value=this.value.trim();
        let data=info.filter(function(element){
            return element.name.includes(value)||element.py.includes(value);
        })
        renderr(data);
    }
    function renderr(data){
        conli.innerHTML='';
        aside.innerHTML='';
        let obj={};
        data.forEach(function(element){
            let first=element.py.charAt(0).toUpperCase();
            if(!obj[first]){
                obj[first]=[];
            }
            obj[first].push(element);
        })
        let char=Object.keys(obj).sort();
        char.forEach(element=>{
//                conli.innerHTML+=`<li>${element}</li>`;
            obj[element].forEach(value=>{
                conli.innerHTML+=`
                    
				    `
                aside.innerHTML=`
				<li>A</li>
		        <li>B</li>
		        <li>C</li>
		        <li>D</li>
		        <li>E</li>
		        <li>F</li>
		        <li>G</li>
		        <li>H</li>
		        <li>I</li>
		        <li>J</li>
		        <li>K</li>
		        <li>L</li>
		        <li>M</li>
		        <li>N</li>
		        <li>0</li>
		        <li>P</li>
		        <li>Q</li>
		        <li>R</li>
		        <li>S</li>
		        <li>T</li>
		        <li>U</li>
		        <li>V</li>
		        <li>W</li>
		        <li>X</li>
		        <li>Y</li>
		        <li>Z</li>
		        <li>#</li>`
            })
        })
    }
})
