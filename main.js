require.config({
	baseUrl:'',
	paths:{
		jquery:'vendor/jquery/jquery-2.1.1',
		avalon:'vendor/avalon/avalon',
		text:'vendor/require/text',
		domReady:'vendor/require/domReady',
		css:'vendor/require/css.js'
		
	},
	priority:['text','css'],
	shim:{
//		jquery:{
//			exports:"jQuery"
//		},
//		avalon:{
//			exports:"avalon"
//		}
	}
});
require(['avalon','domReady!'],function(){
	avalon.log("加载avalon完毕，开始构建根VM与加载其他模块")
	avalon.templateCache.empty=" "
	avalon.define({
		$id:"root",
		header:"这是根模块，用于放置其他模块都共用的东西，比如<b>用户名</b>什么的",
		footer:"页脚消息",
		page:"empty"
	});
	avalon.scan(document.body)
	require(['./modules/aaa/aaa'],function(){
		avalon.log("加载其他完毕")
	});
});
