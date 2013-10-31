Ext.data.JsonP.tupai_model_ApiManager({"tagname":"class","name":"tupai.model.ApiManager","autodetected":{},"files":[{"filename":"ApiManager.js","href":"ApiManager.html#tupai-model-ApiManager"}],"author":[{"tagname":"author","name":"","email":"a href='bocelli.hu@gmail.com'"}],"docauthor":[{"tagname":"docauthor","name":"","email":"a href='bocelli.hu@gmail.com'"}],"since":"tupai.js 0.1","members":[{"name":"execute","tagname":"method","owner":"tupai.model.ApiManager","id":"method-execute","meta":{}},{"name":"initialize","tagname":"method","owner":"tupai.model.ApiManager","id":"method-initialize","meta":{}},{"name":"notify","tagname":"method","owner":"tupai.model.ApiManager","id":"method-notify","meta":{}},{"name":"registerObserver","tagname":"method","owner":"tupai.model.ApiManager","id":"method-registerObserver","meta":{}},{"name":"unRegisterObserver","tagname":"method","owner":"tupai.model.ApiManager","id":"method-unRegisterObserver","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-tupai.model.ApiManager","short_doc":"bocelli.hu\nbocelli.hu\n\nexample\n\nRootViewController.js\n\nPackage('demo')\n.use('tupai.ui.View')\n.use('tupai.ViewControll...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ApiManager.html#tupai-model-ApiManager' target='_blank'>ApiManager.js</a></div></pre><div class='doc-contents'><p>bocelli.hu\nbocelli.hu</p>\n\n<h3>example</h3>\n\n<h4>RootViewController.js</h4>\n\n<pre class='inline-example '><code>Package('demo')\n.use('<a href=\"#!/api/tupai.ui.View\" rel=\"tupai.ui.View\" class=\"docClass\">tupai.ui.View</a>')\n.use('<a href=\"#!/api/tupai.ViewController\" rel=\"tupai.ViewController\" class=\"docClass\">tupai.ViewController</a>')\n.define('RootViewController', function(cp) { return cp.ViewController.extend({\n    viewInit: function() {\n        var contentView = new cp.View();\n        this.setContentView(contentView);\n    },\n    viewDidLoad: function() {\n        this.registerApiObserver('timeline', this);\n        this.executeApi({\n            name: 'timeline',\n            requestName: 'search',\n            parameters: {q: 'NHK'}\n        });\n    },\n    viewDidUnload: function() {\n        this.unRegisterApiObserver('timeline', this);\n    },\n    didHttpRequestSuccess: function(e) {\n        var res = e.response;\n        this.getContentView().setValue(res.responseText);\n        logOnBody('[RootViewController]: ' + res.responseText);\n    },\n    didHttpRequestError: function(e) {\n        logOnBody(e);\n    }\n});});\n\nPackage('demo')\n.use('<a href=\"#!/api/tupai.Application\" rel=\"tupai.Application\" class=\"docClass\">tupai.Application</a>')\n.define('ResponseDelegate', function(cp) { return Package.Class.extend({\n    didHttpRequestSuccess: function(name, reqName, res, req) {\n\n        logOnBody('[ResponseDelegate]: ' + res.responseText);\n    },\n    didHttpRequestError: function(name, reqName, res, req) {\n        logOnBody(res.responseText);\n    }\n});});\n\nPackage('demo')\n.use('<a href=\"#!/api/tupai.Application\" rel=\"tupai.Application\" class=\"docClass\">tupai.Application</a>')\n.use('demo.RootViewController')\n.run(function(cp) {\n    var apiManagerConfig = {\n        apiParameterMap: {\n            timeline: {\n                search: {\n                    method: 'GET',\n                    url: '/testData.json',\n                    parameters: {\n                        'some_parameter': 'hoge'\n                    }\n                }\n            }\n        },\n        responseDelegate: {\n            classzz: \"demo.ResponseDelegate\"\n        }\n    };\n    var app = new cp.Application({\n        window: {\n            routes: {\n                '/root'    : cp.RootViewController,\n            }\n        },\n        apiManager: apiManagerConfig\n    });\n    app.show('/root');\n});\n</code></pre>\n\n<h3>multi ApiManager example</h3>\n\n<pre><code>var app = new cp.Application({\n    apiManagers: {\n        manager1: apiManagerConfig1,\n        manager2: apiManagerConfig2,\n        ...\n    },\n    ...\n});\n</code></pre>\n        <p>Available since: <b>tupai.js 0.1</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-execute' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.ApiManager'>tupai.model.ApiManager</span><br/><a href='source/ApiManager.html#tupai-model-ApiManager-method-execute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.ApiManager-method-execute' class='name expandable'>execute</a>( <span class='pre'>options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>execute request ...</div><div class='long'><p>execute request</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>api name</p>\n</div></li><li><span class='pre'>requestName</span> : String<div class='sub-desc'><p>request name</p>\n</div></li><li><span class='pre'>parameters</span> : Object (optional)<div class='sub-desc'><p>request parameters</p>\n</div></li><li><span class='pre'>queryParameters</span> : Object (optional)<div class='sub-desc'><p>request queryParameters</p>\n</div></li><li><span class='pre'>formDatas</span> : Object (optional)<div class='sub-desc'><p>request formDatas</p>\n</div></li><li><span class='pre'>attributes</span> : Object (optional)<div class='sub-desc'><p>request custom attributes</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.ApiManager'>tupai.model.ApiManager</span><br/><a href='source/ApiManager.html#tupai-model-ApiManager-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.ApiManager-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>config</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>initialize ...</div><div class='long'><p>initialize</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>client</span> : Object<div class='sub-desc'><p>HttpClient config</p>\n<ul><li><span class='pre'>classzz</span> : Object (optional)<div class='sub-desc'><p>HttpClient class</p>\n<p>Defaults to: <code>'tupai.net.HttpClient'</code></p></div></li><li><span class='pre'>type</span> : Object (optional)<div class='sub-desc'><p>HttpClient type will be jsonp or http</p>\n</div></li></ul></div></li><li><span class='pre'>requestClasszz</span> : String (optional)<div class='sub-desc'><p>HttpRequest class</p>\n<p>Defaults to: <code>'tupai.net.HttpRequest'</code></p></div></li><li><span class='pre'>responseDelegate</span> : Object (optional)<div class='sub-desc'><p>HttpResponseDelegate config</p>\n<ul><li><span class='pre'>classzz</span> : String (optional)<div class='sub-desc'><p>HttpResponseDelegate class</p>\n</div></li></ul></div></li><li><span class='pre'>apiParameterMap</span> : Object (optional)<div class='sub-desc'><p>see <a href=\"#!/api/tupai.net.HttpRequest-method-initialize\" rel=\"tupai.net.HttpRequest-method-initialize\" class=\"docClass\">tupai.net.HttpRequest.initialize</a></p>\n\n<h3>apiParameterMap example</h3>\n\n<pre><code>{\n    timeline: {\n        search: {\n            method: 'GET',\n            url: '/api/items',\n            parameters: {\n                // some parameter\n            },\n        },\n        ...\n    },\n    ...\n}\n</code></pre>\n</div></li></ul></div></li></ul></div></div></div><div id='method-notify' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.ApiManager'>tupai.model.ApiManager</span><br/><a href='source/ApiManager.html#tupai-model-ApiManager-method-notify' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.ApiManager-method-notify' class='name expandable'>notify</a>( <span class='pre'>name, requestName, parameters, queryParameters, formDatas, attributes</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>notify an event to call observer delegate ...</div><div class='long'><p>notify an event to call observer delegate</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>api name</p>\n</div></li><li><span class='pre'>requestName</span> : String<div class='sub-desc'><p>request name</p>\n</div></li><li><span class='pre'>parameters</span> : Object<div class='sub-desc'><p>request parameters</p>\n</div></li><li><span class='pre'>queryParameters</span> : Object<div class='sub-desc'><p>request queryParameters</p>\n</div></li><li><span class='pre'>formDatas</span> : Object<div class='sub-desc'><p>request formDatas</p>\n</div></li><li><span class='pre'>attributes</span> : Object<div class='sub-desc'><p>request attributes</p>\n</div></li></ul></div></div></div><div id='method-registerObserver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.ApiManager'>tupai.model.ApiManager</span><br/><a href='source/ApiManager.html#tupai-model-ApiManager-method-registerObserver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.ApiManager-method-registerObserver' class='name expandable'>registerObserver</a>( <span class='pre'>name, observer, [first]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>register an observer ...</div><div class='long'><p>register an observer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>api name to observer</p>\n</div></li><li><span class='pre'>observer</span> : Object<div class='sub-desc'><p>observer instance</p>\n<ul><li><span class='pre'>didHttpRequestSuccess</span> : Function (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>didHttpRequestError</span> : Function (optional)<div class='sub-desc'><h3>observer methods parameter</h3>\n\n<pre><code>{\n    name: api name\n    requestname: request name\n    response: response object\n    request: request object\n    attributes: custom attributes\n}\n</code></pre>\n</div></li></ul></div></li><li><span class='pre'>first</span> : boolean (optional)<div class='sub-desc'><p>add listener to the first of events pool</p>\n<p>Defaults to: <code>true</code></p></div></li></ul></div></div></div><div id='method-unRegisterObserver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.model.ApiManager'>tupai.model.ApiManager</span><br/><a href='source/ApiManager.html#tupai-model-ApiManager-method-unRegisterObserver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.model.ApiManager-method-unRegisterObserver' class='name expandable'>unRegisterObserver</a>( <span class='pre'>name, observer</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>delete an observer ...</div><div class='long'><p>delete an observer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>api name to observer</p>\n</div></li><li><span class='pre'>observer</span> : Object<div class='sub-desc'><p>observer instance</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});