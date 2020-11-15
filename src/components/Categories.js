import React, {Component} from 'react';
import { Cardlist } from './Cardlist';
import { Loading } from './Loading';
import './Categories.css';
/*import fetch from 'isomorphic-fetch'*/

export class Categories extends Component {
    constructor(props){
        super(props);
        this.state= {
            err: false,
            page: 1,
            news: []
        }
    }

    /*componentWillReceiveProps(nextProps){
        console.log('route changed')
    }*/

    componentDidMount() {
        console.log("method",this.props.url)
        this.loadNews()
    }

    loadNews = () => {
        const { page, news }= this.state;
        try{
        console.log(`${this.props.url}&page=${page}`);
        fetch(`${this.props.url}&page=${page}`)
        .then( results => {
            return results.json();
        }).then( data  => {
            this.setState({news: [...news, ...data]});
            //this.setState({news:data},this.logs);
            console.log(this.state.news);
         });
        }
        catch(e){console.log('error');
                this.setState({err: true})}
    }

    /*logs=()=>{
        console.log(this.state.news)
    }*/

    loadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1
        }), this.loadNews)
        
    }

    render(){
        const { news } = this.state;
        if(this.state.err === true)
        {
            return (<h4>Could not load page</h4>);
        }
        else if(this.state.news.length === 0)
		{
			return(<Loading />);
        }
        else{
            //console.log(this.state.news)
            return(
                <div>
                    <Cardlist news={news} />
                    <div className="load">
                    <button className="more" onClick={this.loadMore}>Load More<i className="fa fa-angle-double-down"></i></button>
                    </div>
                </div>
            );
        }
    }

}
