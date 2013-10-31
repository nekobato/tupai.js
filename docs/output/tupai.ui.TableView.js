Ext.data.JsonP.tupai_ui_TableView({"tagname":"class","name":"tupai.ui.TableView","autodetected":{},"files":[{"filename":"TableView.js","href":"TableView.html#tupai-ui-TableView"}],"author":[{"tagname":"author","name":"","email":"a href='bocelli.hu@gmail.com'"}],"docauthor":[{"tagname":"docauthor","name":"","email":"a href='bocelli.hu@gmail.com'"}],"since":"tupai.js 0.1","members":[{"name":"dequeueReusableCell","tagname":"method","owner":"tupai.ui.TableView","id":"method-dequeueReusableCell","meta":{}},{"name":"initialize","tagname":"method","owner":"tupai.ui.TableView","id":"method-initialize","meta":{}},{"name":"loadBottomNewData","tagname":"method","owner":"tupai.ui.TableView","id":"method-loadBottomNewData","meta":{}},{"name":"loadTopNewData","tagname":"method","owner":"tupai.ui.TableView","id":"method-loadTopNewData","meta":{}},{"name":"reloadData","tagname":"method","owner":"tupai.ui.TableView","id":"method-reloadData","meta":{}},{"name":"reloadRowsFrom","tagname":"method","owner":"tupai.ui.TableView","id":"method-reloadRowsFrom","meta":{}},{"name":"setContainerId","tagname":"method","owner":"tupai.ui.TableView","id":"method-setContainerId","meta":{}},{"name":"setFilter","tagname":"method","owner":"tupai.ui.TableView","id":"method-setFilter","meta":{}},{"name":"setTableViewDelegate","tagname":"method","owner":"tupai.ui.TableView","id":"method-setTableViewDelegate","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-tupai.ui.TableView","short_doc":"bocelli.hu\nbocelli.hu\nAn instance of TableView is a means for displaying hierarchical lists of information. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/TableView.html#tupai-ui-TableView' target='_blank'>TableView.js</a></div></pre><div class='doc-contents'><p>bocelli.hu\nbocelli.hu\nAn instance of TableView is a means for displaying hierarchical lists of information.\nYou must define some delegate method in your ViewController</p>\n\n<h3>delegate methods</h3>\n\n<ul>\n<li>numberOfRows(tableView);</li>\n<li>cellForRowAtIndexPath(indexPath, tableView);</li>\n<li>cellForRowAtTop(tableView);</li>\n<li>cellForRowAtBottom(tableView);</li>\n</ul>\n\n\n<h3>simple example</h3>\n\n<pre><code>Package()\n.use('<a href=\"#!/api/tupai.ui.View\" rel=\"tupai.ui.View\" class=\"docClass\">tupai.ui.View</a>')\n.use('<a href=\"#!/api/tupai.ui.TableView\" rel=\"tupai.ui.TableView\" class=\"docClass\">tupai.ui.TableView</a>')\n.use('<a href=\"#!/api/tupai.ViewController\" rel=\"tupai.ViewController\" class=\"docClass\">tupai.ViewController</a>')\n.define('ViewEventsPlugin', function(cp) { return cp.ViewController.extend({\n    viewInit: function() {\n        this._data = ['red','blue','green'];\n        var view = new cp.TableView();\n        view.setTableViewDelegate(this);\n        this.setContentView(view);\n    },\n    numberOfRows: function() {\n        return this._data.length;\n    },\n    cellForRowAtTop: function() {\n        if(this._headerView == null) {\n            this._headerView = new cp.View();\n            this._headerView.setValue('header');\n        }\n        return this._headerView;\n    },\n    cellForRowAtBottom: function() {\n        if(this._bottomView == null) {\n            this._bottomView = new cp.View();\n            this._bottomView.setValue('footer');\n        }\n        return this._bottomView;\n    },\n    cellForRowAtIndexPath: function(indexPath, tableView) {\n        var row = indexPath.row;\n        var cell = tableView.dequeueReusableCell('demo_cell');\n        if(cell == null) {\n            cell = new cp.View();\n        }\n        cell.setValue(this._data[row]);\n        return cell;\n    }\n});});\n</code></pre>\n        <p>Available since: <b>tupai.js 0.1</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-dequeueReusableCell' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ui.TableView'>tupai.ui.TableView</span><br/><a href='source/TableView.html#tupai-ui-TableView-method-dequeueReusableCell' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ui.TableView-method-dequeueReusableCell' class='name expandable'>dequeueReusableCell</a>( <span class='pre'>type</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a reusable table-view cell object located by its type ...</div><div class='long'><p>Returns a reusable table-view cell object located by its type</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ui.TableView'>tupai.ui.TableView</span><br/><a href='source/TableView.html#tupai-ui-TableView-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ui.TableView-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>[args]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>initialize ...</div><div class='long'><p>initialize</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object (optional)<div class='sub-desc'><p>see <a href=\"#!/api/tupai.ui.View-method-initialize\" rel=\"tupai.ui.View-method-initialize\" class=\"docClass\">tupai.ui.View.initialize</a></p>\n</div></li></ul></div></div></div><div id='method-loadBottomNewData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ui.TableView'>tupai.ui.TableView</span><br/><a href='source/TableView.html#tupai-ui-TableView-method-loadBottomNewData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ui.TableView-method-loadBottomNewData' class='name expandable'>loadBottomNewData</a>( <span class='pre'>length</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>load the bottom new data ...</div><div class='long'><p>load the bottom new data</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>length</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-loadTopNewData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ui.TableView'>tupai.ui.TableView</span><br/><a href='source/TableView.html#tupai-ui-TableView-method-loadTopNewData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ui.TableView-method-loadTopNewData' class='name expandable'>loadTopNewData</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>load the top new data ...</div><div class='long'><p>load the top new data</p>\n</div></div></div><div id='method-reloadData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ui.TableView'>tupai.ui.TableView</span><br/><a href='source/TableView.html#tupai-ui-TableView-method-reloadData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ui.TableView-method-reloadData' class='name expandable'>reloadData</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>reload this tableView ...</div><div class='long'><p>reload this tableView</p>\n</div></div></div><div id='method-reloadRowsFrom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ui.TableView'>tupai.ui.TableView</span><br/><a href='source/TableView.html#tupai-ui-TableView-method-reloadRowsFrom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ui.TableView-method-reloadRowsFrom' class='name expandable'>reloadRowsFrom</a>( <span class='pre'>[from]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>reload this tableView ...</div><div class='long'><p>reload this tableView</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>from</span> : Number (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setContainerId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ui.TableView'>tupai.ui.TableView</span><br/><a href='source/TableView.html#tupai-ui-TableView-method-setContainerId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ui.TableView-method-setContainerId' class='name expandable'>setContainerId</a>( <span class='pre'>id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>set table view container id ...</div><div class='long'><p>set table view container id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ui.TableView'>tupai.ui.TableView</span><br/><a href='source/TableView.html#tupai-ui-TableView-method-setFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ui.TableView-method-setFilter' class='name expandable'>setFilter</a>( <span class='pre'>callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>set filter to tableview to control show and hide the cell ...</div><div class='long'><p>set filter to tableview to control show and hide the cell</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setTableViewDelegate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tupai.ui.TableView'>tupai.ui.TableView</span><br/><a href='source/TableView.html#tupai-ui-TableView-method-setTableViewDelegate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tupai.ui.TableView-method-setTableViewDelegate' class='name expandable'>setTableViewDelegate</a>( <span class='pre'>delegate</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>set table view delegate ...</div><div class='long'><p>set table view delegate</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>delegate</span> : Object<div class='sub-desc'><h3>delegate methods</h3>\n\n<ul>\n<li>numberOfRows(tableView);</li>\n<li>cellForRowAtIndexPath(indexPath, tableView);</li>\n<li>cellForRowAtTop(tableView);</li>\n<li>cellForRowAtBottom(tableView);</li>\n</ul>\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});