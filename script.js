(function()
	{
	'use strict';
	var typeOf=function(variable)
		{
		return typeof eval(variable)
	};
	/* Cracked by HKLCF
  if(top!=window)
		{
		top.location.replace('http://json.parser.online.fr');
		return
	}
  */
	(function()
		{
		var favicon='favicon',online='online',$status=document.getElementById('status'),slash='/',dot='.',parser='parser',semicolumn=':',json='json',$head=document.querySelector('head'),$result=document.getElementById('result'),$editor=document.getElementById('editor'),fr='fr',event_keyup='keyup',event_click='click',root='http'+semicolumn+slash+slash+json+dot+parser+dot+online+dot+fr+slash;
		for(var i=0,nodes=document.querySelectorAll('.ui-option'),node;
		node=nodes[i];
		i++)
			{
			node.addEventListener(event_click,function()
				{
				document.querySelector('body').classList.toggle(this.id)
			}
			,false)
		}
		(function()
			{
			var popupContainer=document.querySelector('.popup-container'),popup=document.querySelector('.popup');
			document.querySelector('.about').addEventListener(event_click,function()
				{
				popupContainer.classList.add('show')
			}
			,false);
			document.querySelector('.popup-centerer').addEventListener(event_click,function(e)
				{
				if(e.target.classList.contains('popup-centerer'))
					{
					popupContainer.classList.remove('show');
					popup.classList.remove('bitcoin')
				}
			}
			,false);
			document.querySelector('#bitcoin').addEventListener(event_click,function()
				{
				popup.classList.add('bitcoin')
			}
			)
		}
		)();
		(function()
			{
			$result.addEventListener(event_click,function(ev)
				{
				var clickedElement=ev.target;
				if(clickedElement.classList.contains('toggle')||clickedElement.classList.contains('toggle-end'))
					{
					clickedElement.parentNode.classList.toggle('collapsed')
				}
			}
			,false)
		}
		)();
		(function()
			{
			var startX,startY,startWidth,startHeight,startHeight2,resizableElement=document.querySelector('.ui-editor'),resizableElement2=document.querySelector('.ui-aside'),resizer=document.querySelector('.ui-resizer'),doDrag=function(e)
				{
				if(window.getComputedStyle(resizer).height=='1px')
					{
					var y=startHeight+e.clientY-startY;
					y=y>5?y:5;
					resizableElement.style.width='';
					resizableElement.style.height=y+'px';
					resizableElement2.style.height=(startHeight2-y)+'px'
				}
				else
					{
					var x=startWidth+e.clientX-startX;
					x=x>5?x:5;
					resizableElement.style.width=x+'px';
					resizableElement.style.height='';
					resizableElement2.style.height=''
				}
			}
			,stopDrag=function(e)
				{
				document.removeEventListener('mousemove',doDrag,false);
				document.removeEventListener('mouseup',stopDrag,false);
				resizer.classList.remove('resizing')
			};
			resizer.addEventListener('mousedown',function(e)
				{
				startX=e.clientX;
				startY=e.clientY;
				startWidth=parseInt(document.defaultView.getComputedStyle(resizableElement).width,10);
				startHeight=parseInt(document.defaultView.getComputedStyle(resizableElement).height,10);
				startHeight2=parseInt(window.innerHeight);
				this.classList.add('resizing');
				document.addEventListener('mousemove',doDrag,false);
				document.addEventListener('mouseup',stopDrag,false)
			}
			,false);
			window.addEventListener('resize',function()
				{
				resizableElement.style.width='';
				resizableElement.style.height='';
				resizableElement2.style.height=''
			}
			,false)
		}
		)();
		function parse(str)
			{
			function trim(s)
				{
				return ltrim(rtrim(s))
			}
			function rtrim(s)
				{
				return s.replace(/\s+$/g,'')
			}
			function ltrim(s)
				{
				return s.replace(/^\s+/g,'')
			}
			function findEndString()
				{
				var current=0,nbBackslash,i;
				do
					{
					current=snatch.indexOf('"',current+1),nbBackslash=0,i=1;
					do
						{
						if(snatch.substring(current-i,current-i+1)==='\\')
							{
							nbBackslash=nbBackslash+1;
							i++;
							continue
						}
						break
					}
					while(true);
					if(nbBackslash%2===0)
						{
						break
					}
				}
				while(true);
				return current
			}
			function parseObject(snatch)
				{
				function parsePair(snatch)
					{
					function parseString(snatch)
						{
						var name,length,k,firstChar=snatch.substring(0,1);
						snatch.update('');
						if(firstChar==='"')
							{
							name=snatch.shift(findEndString(snatch.todo)+1);
							if(name.search(/\\u(?![\d|A-F|a-f]{4})/g)!==-1)
								{
								return snatch.err('\\u must be followed by 4 hexadecimal characters',name)
							}
							length=name.length;
							for(k=0;
							k<length;
							k++)
								{
								if(name.substring(k,k+1)=="\\")
									{
									if(k+1<length)
										{
										k++;
										if(!name.substring(k,k+1).search(/[^\"|\\|\/|b|f|n|r|t|u]/))
											{
											return snatch.err('Backslash must be escaped',name)
										}
									}
								}
							}
							return snatch.update('<span class="property">"<span class="p">'+name.substring(1,name.length-1)+'</span>"</span>')
						}
						name=snatch.shift(snatch.indexOf(':'));
						return snatch.err('Name property must be a String wrapped in double quotes.',name)
					}
					function parseSeparator(snatch)
						{
						if(snatch.substring(0,1)!==':')
							{
							snatch.err('Semi-column is missing.',snatch.shift(snatch.indexOf(':')))
						}
						return snatch.swap(1)
					}
					snatch.update('<li>');
					if(snatch.substring(0,1)==='}')
					{
					return snatch.update('</li>')
				}
				snatch=parseString(snatch);
				snatch=parseSeparator(snatch);
				snatch=parseValue(snatch,'}');
			if(snatch.substring(0,1)===',')
				{
				snatch.swap(1).update('</li>');
				return parsePair(snatch)
			}
			if(snatch.substring(0,1)==='}')
			{
			return snatch.update('</li>')
		}
		return snatch.err('Comma is missing',snatch.shift(snatch.indexOf('}'))).update('</li>')
}
if(snatch.indexOf('{')===-1)
		{
		snatch.err('Opening brace is missing',snatch.todo);
		return snatch.update('','')
	}
	else
		{
		snatch.shift(1);
		snatch.update('<span class="object"><span class="toggle">{</span><ul>');
			snatch=parsePair(snatch).update('</ul>');
			if(snatch.indexOf('}')===-1)
			{
			snatch.err('Closing brace is missing',snatch.todo);
			return snatch.update('','')
		}
		return snatch.span('toggle-end',snatch.shift(1))
	}
}
function parseArray(snatch)
	{
	var io=0;
	function parseElement(snatch)
		{
		snatch.update('<li>');
		snatch=parseValue(snatch,']');
		if(snatch.substring(0,1)===',')
			{
			snatch.swap(1).update('</li>');
			return parseElement(snatch,++io)
		}
		if(snatch.substring(0,1)===']')
			{
			return snatch.update('</li>')
		}
		return snatch.err('Comma is missing',snatch.shift(snatch.search(/(,|\])/))).update('</li>')
	}
	if(snatch.indexOf('[')===-1)
		{
		snatch.err('Opening square bracket is missing',snatch.todo);
		return snatch.update('','')
	}
	snatch.shift(1);
	snatch.update('<span class="array">');
	snatch.update('<span class="toggle">[</span><ol>');
	if(snatch.indexOf(']')===0)
		{
		snatch.shift(1);
		snatch.update('</ol><span class="toggle-end" card="0">]</span>');
		return snatch.update('</span>')
	}
	snatch=parseElement(snatch,0);
	if(snatch.indexOf(']')===-1)
		{
		snatch.err('Closing square bracket is missing',snatch.todo);
		snatch.update('</ol><span class="toggle-end" card="'+(io+1)+'"></span>');
		return snatch.update('</span>')
	}
	snatch.shift(1);
	snatch.update('</ol><span class="toggle-end" card="'+(io+1)+'">]</span>');
	return snatch.update('</span>')
}
function parseValue(snatch,closingBracket)
	{
	var value,j,k,length,propertyValue,type='';
	if(snatch.search(/^(")/)===0)
		{
		value=snatch.shift(findEndString(snatch.todo)+1);
		if(value.search(/\\u(?![\d|A-F|a-f]{4})/g)!==-1)
			{
			return snatch.err('\\u must be followed by 4 hexadecimal characters',value)
		}
		length=value.length;
		for(k=0;
		k<length;
		k++)
			{
			if(value.substring(k,k+1)=="\\")
				{
				if(k+1<length)
					{
					k++;
					if(!value.substring(k,k+1).search(/[^\"|\\|\/|b|f|n|r|t|u]/))
						{
						return snatch.err('Backslash must be escaped',value)
					}
				}
			}
		}
		return snatch.span('string',value)
	}
	if(snatch.search(/^\{/)===0)
			{
			return parseObject(snatch)
		}
		if(snatch.search(/^\[/)===0)
			{
			return parseArray(snatch)
		}
		j=snatch.search(new RegExp('(,|'+closingBracket+')'));
		if(j===-1)
			{
			j=snatch.todo.length-1;
			propertyValue=rtrim(snatch.todo);
			snatch.update('','')
		}
		else
			{
			propertyValue=rtrim(snatch.shift(j))
		}
		try
			{
			type=typeOf(propertyValue)
		}
		catch(e)
			{
		}
		switch(type)
			{
			case'boolean':case'number':return snatch.span(type,propertyValue);
			default:if(propertyValue==='null')
				{
				return snatch.span('null',propertyValue)
			}
			else
				{
				if(propertyValue.search(/^(')/)===0)
					{
					return snatch.err('String must be wrapped in double quotes',propertyValue)
				}
				return snatch.err('Unknown type',propertyValue)
			}
		}
	}
	var hasError=false,Snatch=function(todo)
		{
		this.done='';
		this.todo=todo?todo:'';
		this.update=function(done,todo)
			{
			if(done)
				{
				this.done+=done
			}
			if(todo!==undefined)
				{
				this.todo=ltrim(todo)
			}
			return this
		};
		this.swap=function(charNumber)
			{
			if(charNumber&&!isNaN(Number(charNumber))&&this.todo.length>=charNumber)
				{
				this.update(this.todo.substr(0,charNumber),this.todo.substring(charNumber))
			}
			return this
		};
		this.toString=function()
			{
			if(this.todo.length!==0)
				{
				this.err('Text after last closing brace.',this.todo)
			}
			return this.done
		};
		this.span=function(className,text)
			{
			return this.update('<span class="'+className+'">'+text+'</span>')
		};
		this.err=function(title,text)
			{
			hasError=true;
			return this.update('<span class="error" title="'+title+'">'+text+'</span>')
		};
		this.shift=function(nbOfChars)
			{
			var shifted;
			if(nbOfChars&&!isNaN(Number(nbOfChars))&&this.todo.length>=nbOfChars)
				{
				shifted=this.substring(0,nbOfChars);
				this.update('',this.substring(nbOfChars));
				return rtrim(shifted)
			}
			return''
		};
		this.indexOf=function(searchValue,fromIndex)
			{
			if(fromIndex)
				{
				return this.todo.indexOf(searchValue,fromIndex)
			}
			else
				{
				return this.todo.indexOf(searchValue)
			}
		};
		this.substring=function(fromIndex,toIndex)
			{
			if(toIndex)
				{
				return this.todo.substring(fromIndex,toIndex)
			}
			else
				{
				return this.todo.substring(fromIndex)
			}
		};
		this.search=function(regex)
			{
			return this.todo.search(regex)
		}
	}
	,snatch=new Snatch(trim(str)),result;
	if(ltrim(str).substr(0,1)==='[')
		{
		result=
			{
			html:parseArray(snatch).toString(),valid:!hasError
		}
	}
	else
		{
		if(ltrim(str).substr(0,1)==='{')
				{
				result=
					{
					html:parseObject(snatch).toString(),valid:!hasError
				}
			}
			else
				{
				result=
					{
					html:snatch.err("JSON expression must be an object or an array",str).update(null,'').toString(),valid:false
				}
			}
		}
		return result
	}
	/* Cracked by HKLCF
  if((document.location+'').search(root)!==0)
		{
		parse=function()
			{
			return
				{
				html:'',valid:true
			}
		};
		return
	}*/
	function analyze()
		{
		function trim(s)
			{
			var whitespace="[\\x20\\t\\r\\n\\f]",rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g");
			return s.replace(rtrim,'')
		};
		function changeFavicon(s)
			{
			var currentFavicon=document.querySelector('#favicon'),newFavicon=currentFavicon.cloneNode();
			newFavicon.setAttribute('href','favicon/'+s+'.png');
			$head.replaceChild(newFavicon,currentFavicon)
		}
		var json=$editor.value;
		if(trim(json)==='')
			{
			$result.innerHTML='';
			$status.classList.remove('status-error');
			changeFavicon('undefined');
			return
		}
		$status.classList.remove('status-error');
		setTimeout(function()
			{
			json=json.replace(/</g,'&lt;');
			json=json.replace(/>/g,'&gt;');
			var result=parse(json);
			$result.innerHTML=result.html;
			if(result.valid)
				{
				changeFavicon('valid')
			}
			else
				{
				var nbErrors=result.html.match(/class="error"/g).length;
				$status.innerHTML='<b>Invalid JSON</b> &nbsp; '+nbErrors+'&nbsp;error'+(nbErrors>1?'s':'')+'&nbsp;found';
				$status.classList.add('status-error');
				changeFavicon('syntax-error')
			}
		}
		,0)
	}
	$editor.addEventListener(event_keyup,analyze,false);
	$editor.addEventListener(event_click,analyze,false);
	analyze();
  /* Cracked by HKLCF
	if(root.length!==22+favicon.length)
		{
		analyze=function()
			{
		};
		return
	}
  */
	$editor.select()
}
)()
}
)();
