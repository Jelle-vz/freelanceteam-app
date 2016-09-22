import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles.css';

var headerData = {
  logo: {
    alt:'Logo alt',
    src:'http://placehold.it/350x150',
    title:'Logo title',
  },
  mainNavigation: [
		{
  id:'87ryfihwu',
  navigationTitle:'Menuitem 1',
  url:'/menuitem-1',
		},
		{
  id:'wefr45y243t',
  navigationTitle:'Menuitem 2',
  url:'/menuitem-2',
		},
	],
};

let Navigation = React.createClass({
  render:function () {
    let data = this.props.data;
    return (
			<div className="navigation">
				<ul>
					{data.map(function (item) {
  					return (
  						<li key={item.id}>
								<a href={item.url}>{item.navigationTitle}</a>
							</li>
						);
					})}
			</ul>
		</div>
  );
  },
});

var Header = React.createClass({
  render: function () {
    let data = this.props.data;
    return (
    <div className="header">
				    <div className="logo">
							<img src={data.logo.src} alt={data.logo.alt} title={data.logo.title}/>
				    </div>
				    <Navigation data={data.mainNavigation}/>
			    </div>
    );
  },
});

ReactDOM.render(
	<Header data={headerData} />,
	document.getElementById('container')
);
