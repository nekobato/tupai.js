Ext.data.JsonP.tupai_ViewController({"tagname":"class","name":"tupai.ViewController","autodetected":{},"files":[{"filename":"ViewController.js","href":"ViewController.html#tupai-ViewController"}],"author":[{"tagname":"author","name":"","email":"a href='bocelli.hu@gmail.com'"}],"docauthor":[{"tagname":"docauthor","name":"","email":"a href='bocelli.hu@gmail.com'"}],"since":"tupai.js 0.1","members":[{"name":"executeApi","tagname":"method","owner":"tupai.ViewController","id":"method-executeApi","meta":{}},{"name":"findViewById","tagname":"method","owner":"tupai.ViewController","id":"method-findViewById","meta":{}},{"name":"getApplication","tagname":"method","owner":"tupai.ViewController","id":"method-getApplication","meta":{}},{"name":"getCache","tagname":"method","owner":"tupai.ViewController","id":"method-getCache","meta":{}},{"name":"getContentView","tagname":"method","owner":"tupai.ViewController","id":"method-getContentView","meta":{}},{"name":"getViewStatus","tagname":"method","owner":"tupai.ViewController","id":"method-getViewStatus","meta":{}},{"name":"getWindow","tagname":"method","owner":"tupai.ViewController","id":"method-getWindow","meta":{}},{"name":"initialize","tagname":"method","owner":"tupai.ViewController","id":"method-initialize","meta":{}},{"name":"registerApiObserver","tagname":"method","owner":"tupai.ViewController","id":"method-registerApiObserver","meta":{}},{"name":"registerCacheObserver","tagname":"method","owner":"tupai.ViewController","id":"method-registerCacheObserver","meta":{}},{"name":"setContentView","tagname":"method","owner":"tupai.ViewController","id":"method-setContentView","meta":{}},{"name":"unRegisterApiObserver","tagname":"method","owner":"tupai.ViewController","id":"method-unRegisterApiObserver","meta":{}},{"name":"unRegisterCacheObserver","tagname":"method","owner":"tupai.ViewController","id":"method-unRegisterCacheObserver","meta":{}},{"name":"unRegisterObservers","tagname":"method","owner":"tupai.ViewController","id":"method-unRegisterObservers","meta":{}},{"name":"viewDidLoad","tagname":"method","owner":"tupai.ViewController","id":"method-viewDidLoad","meta":{}},{"name":"viewDidUnload","tagname":"method","owner":"tupai.ViewController","id":"method-viewDidUnload","meta":{}},{"name":"viewInit","tagname":"method","owner":"tupai.ViewController","id":"method-viewInit","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-tupai.ViewController","short_doc":"bocelli.hu\nbocelli.hu\nA controller can send commands to content view to change the view's presentation of the model. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ViewController.html#tupai-ViewController' target='_blank'>ViewController.js</a></div></pre><div class='doc-contents'><p>bocelli.hu\nbocelli.hu\nA controller can send commands to content view to change the view's presentation of the model.\nIt delegate commands from view to update the model's state.</p>\n\n<h3>The delegate commands from Base View:</h3>\n\n<ul>\n<li>viewDidLoad(view);</li>\n<li>viewDidUnload(view);</li>\n<li>viewDidShow(view);</li>\n<li>viewDidHide(view);</li>\n</ul>\n\n\n<h3>The delegate commands from TransitManager</h3>\n\n<ul>\n<li>viewInit(options, url, name);</li>\n<li>transitController(controller, url, options);</li>\n</ul>\n\n\n<h3>The delegate commands from TableView</h3>\n\n<ul>\n<li>numberOfRows(tableView);</li>\n<li>cellForRowAtIndexPath(indexPath, tableView);</li>\n<li>cellForRowAtTop(tableView);</li>\n<li>cellForRowAtBottom(tableView);</li>\n</ul>\n\n        <p>Available since: <b>tupai.js 0.1</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-executeApi' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-executeApi' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-executeApi' class='name expandable'>executeApi</a>( <span class='pre'>options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>execute request ...</div><div class='long'><p>execute request</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>api name</p>\n</div></li><li><span class='pre'>requestName</span> : String<div class='sub-desc'><p>request name</p>\n</div></li><li><span class='pre'>parameters</span> : Object (optional)<div class='sub-desc'><p>request parameters</p>\n</div></li><li><span class='pre'>queryParameters</span> : Object (optional)<div class='sub-desc'><p>request queryParameters</p>\n</div></li><li><span class='pre'>formDatas</span> : Object (optional)<div class='sub-desc'><p>request formDatas</p>\n</div></li><li><span class='pre'>attributes</span> : Object (optional)<div class='sub-desc'><p>request custom attributes</p>\n</div></li><li><span class='pre'>managerName</span> : Object (optional)<div class='sub-desc'><p>apiManagerName</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-findViewById' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-findViewById' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-findViewById' class='name expandable'>findViewById</a>( <span class='pre'>id</span> ) : <a href=\"#!/api/tupai.ui.View\" rel=\"tupai.ui.View\" class=\"docClass\">tupai.ui.View</a><span class=\"signature\"></span></div><div class='description'><div class='short'>find view by id in contentView (set by data-ch-id) ...</div><div class='long'><p>find view by id in contentView (set by data-ch-id)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tupai.ui.View\" rel=\"tupai.ui.View\" class=\"docClass\">tupai.ui.View</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getApplication' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-getApplication' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-getApplication' class='name expandable'>getApplication</a>( <span class='pre'></span> ) : <a href=\"#!/api/tupai.Application\" rel=\"tupai.Application\" class=\"docClass\">tupai.Application</a><span class=\"signature\"></span></div><div class='description'><div class='short'>get the application object ...</div><div class='long'><p>get the application object</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tupai.Application\" rel=\"tupai.Application\" class=\"docClass\">tupai.Application</a></span><div class='sub-desc'><p>application object</p>\n</div></li></ul></div></div></div><div id='method-getCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-getCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-getCache' class='name expandable'>getCache</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>get Cache by name ...</div><div class='long'><p>get Cache by name</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getContentView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-getContentView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-getContentView' class='name expandable'>getContentView</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>get the content view object ...</div><div class='long'><p>get the content view object</p>\n</div></div></div><div id='method-getViewStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-getViewStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-getViewStatus' class='name expandable'>getViewStatus</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>get content view's status. ...</div><div class='long'><p>get content view's status.</p>\n</div></div></div><div id='method-getWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-getWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-getWindow' class='name expandable'>getWindow</a>( <span class='pre'></span> ) : <a href=\"#!/api/tupai.Window\" rel=\"tupai.Window\" class=\"docClass\">tupai.Window</a><span class=\"signature\"></span></div><div class='description'><div class='short'>get the window object ...</div><div class='long'><p>get the window object</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tupai.Window\" rel=\"tupai.Window\" class=\"docClass\">tupai.Window</a></span><div class='sub-desc'><p>window object</p>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>window</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>initialize ...</div><div class='long'><p>initialize</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>window</span> : <a href=\"#!/api/tupai.Window\" rel=\"tupai.Window\" class=\"docClass\">tupai.Window</a><div class='sub-desc'><p>object</p>\n</div></li></ul></div></div></div><div id='method-registerApiObserver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-registerApiObserver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-registerApiObserver' class='name expandable'>registerApiObserver</a>( <span class='pre'>name, observer, [first], [managerName]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>register an observer ...</div><div class='long'><p>register an observer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>api name to observer</p>\n</div></li><li><span class='pre'>observer</span> : Object<div class='sub-desc'><p>observer instance</p>\n<ul><li><span class='pre'>didHttpRequestSuccess</span> : Function (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>didHttpRequestError</span> : Function (optional)<div class='sub-desc'><h3>observer methods parameter</h3>\n\n<pre><code>{\n    name: api name\n    requestname: request name\n    response: response object\n    request: request object\n    attributes: custom attributes\n}\n</code></pre>\n</div></li></ul></div></li><li><span class='pre'>first</span> : boolean (optional)<div class='sub-desc'><p>add listener to the first of events pool</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>managerName</span> : String (optional)<div class='sub-desc'><p>ApiManager name</p>\n</div></li></ul></div></div></div><div id='method-registerCacheObserver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-registerCacheObserver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-registerCacheObserver' class='name expandable'>registerCacheObserver</a>( <span class='pre'>name, observer, [first]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>register an observer ...</div><div class='long'><p>register an observer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>cache name to observer</p>\n</div></li><li><span class='pre'>observer</span> : Object<div class='sub-desc'><p>observer instance</p>\n<ul><li><span class='pre'>didCacheChanged</span> : Object (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>didCacheGC</span> : Object (optional)<div class='sub-desc'><h3>observer methods parameter</h3>\n\n<pre><code>{\n    name: cache name\n    options: some custom options\n}\n</code></pre>\n</div></li></ul></div></li><li><span class='pre'>first</span> : boolean (optional)<div class='sub-desc'><p>add listener to the first of events pool</p>\n<p>Defaults to: <code>true</code></p></div></li></ul></div></div></div><div id='method-setContentView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-setContentView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-setContentView' class='name expandable'>setContentView</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>set content view. ...</div><div class='long'><p>set content view.\nyou should do this method in viewInit</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/tupai.ui.View\" rel=\"tupai.ui.View\" class=\"docClass\">tupai.ui.View</a><div class='sub-desc'><p>content view object</p>\n</div></li></ul></div></div></div><div id='method-unRegisterApiObserver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-unRegisterApiObserver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-unRegisterApiObserver' class='name expandable'>unRegisterApiObserver</a>( <span class='pre'>name, observer, [managerName]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>delete an observer ...</div><div class='long'><p>delete an observer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>cache name to observer</p>\n</div></li><li><span class='pre'>observer</span> : Object<div class='sub-desc'><p>observer instance</p>\n</div></li><li><span class='pre'>managerName</span> : String (optional)<div class='sub-desc'><p>ApiManager name</p>\n</div></li></ul></div></div></div><div id='method-unRegisterCacheObserver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-unRegisterCacheObserver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-unRegisterCacheObserver' class='name expandable'>unRegisterCacheObserver</a>( <span class='pre'>name, observer</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>delete an observer ...</div><div class='long'><p>delete an observer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>cache name to observer</p>\n</div></li><li><span class='pre'>observer</span> : Object<div class='sub-desc'><p>observer instance</p>\n</div></li></ul></div></div></div><div id='method-unRegisterObservers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-unRegisterObservers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-unRegisterObservers' class='name expandable'>unRegisterObservers</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>delete observers that register by registerApiObserver and registerCacheObserver. ...</div><div class='long'><p>delete observers that register by registerApiObserver and registerCacheObserver.\nthis method will be called by viewDidUnload</p>\n</div></div></div><div id='method-viewDidLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-viewDidLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-viewDidLoad' class='name expandable'>viewDidLoad</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>will call by View when did loaded. ...</div><div class='long'><p>will call by View when did loaded.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/tupai.ui.View\" rel=\"tupai.ui.View\" class=\"docClass\">tupai.ui.View</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-viewDidUnload' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-viewDidUnload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-viewDidUnload' class='name expandable'>viewDidUnload</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>will call by View when did unloaded. ...</div><div class='long'><p>will call by View when did unloaded.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/tupai.ui.View\" rel=\"tupai.ui.View\" class=\"docClass\">tupai.ui.View</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-viewInit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ViewController'>tupai.ViewController</span><br/><a href='source/ViewController.html#tupai-ViewController-method-viewInit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ViewController-method-viewInit' class='name expandable'>viewInit</a>( <span class='pre'>options, url, name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>the start point of ViewController. ...</div><div class='long'><p>the start point of ViewController.\nyou should ovveride this function and create a content view by setContentView</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>url</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});