import { React, useState, useEffect} from "react";
import NewsItem from "./NewsItem";
import Image from "../Images/News.jpeg";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {

	// apiKey=55aa03d75c34491ab8168c4c0b0d84c4  c89379eab9894903aaa8e9bbd98c5e60
	let category = props.category;

	const [country, setCountry] = useState('in');
	const [data, setData] = useState([]);
	
	let [articles, setArticles] = useState([]);
	let [totalResults, setTotalResults] = useState(0);
	let [page, setPage] = useState(1);

	let resultNews = async () => {
		const url =
`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&apiKey=55aa03d75c34491ab8168c4c0b0d84c4`;
		let data = await fetch(url);
		let parsedData = await data.json();
		setArticles(parsedData.articles);
		setTotalResults(parsedData.totalResults);
	};

	useEffect(() => {
		resultNews();
	}, [country]);

	let fetchData = async () => {
		const url =
`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page + 1}&apiKey=55aa03d75c34491ab8168c4c0b0d84c4`;
		setPage(page + 1);
		let data = await fetch(url);
		let parsedData = await data.json();
		setArticles(articles.concat(parsedData.articles));
	};


	const changeLocation = (e) => {
        e.preventDefault();
        let country = e.target.value
        setPage(1);
        setData(()=>[])
        setCountry(country);
    };
	

	return (

		<InfiniteScroll
			dataLength={articles.length}
			next={fetchData}
			hasMore={
				articles.length < totalResults
			}
			loader={
				<h4 className="text-center">
					Loading...
				</h4>}
		>

			<div className="d-flex country">
			<span className="countrys row me-1">Country</span>
			<select className="form-control" id="search" onChange={changeLocation}>
			<option value='in'>India</option>
			<option value='ru'>Russia</option>
			<option value="ua">UK</option>
			<option value="us">United States</option>
			<option value="ae">UAE</option>
			</select>
			</div>

			<div className="container my-3">
				<div className="row">
					{articles.map((element) => {
						return (
							<div className="col-md-4" key={element.url}>
								<NewsItem
									sourceName={element.source.name}
									title={element.title}
									desc={element.description}
									imageURL=
									{element.urlToImage ?
										element.urlToImage :
										Image}
									newsUrl={element.url}
									published={element.publishedAt}
									 // 	{/* время публикации статьи */}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</InfiniteScroll>
	);
}

export default News;
