import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../css/general.css";
import { SPORTS } from "../config/base";
import Loading from "./Loading";

const Sports = () => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchNews = async () => {
		setLoading(true);
		await Axios.get(SPORTS)
			.then((response) => {
				console.log(response.data.news);
				setNews(response.data.news);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		fetchNews();
	}, []);
	const display = news.filter((article, index) => {
		return index <= 27;
	});
	const renderNews = display.map((article, index) => {
		const url = article.url;
		return (
			<>
				<div
					id="scontainer1-news"
					key={index}
					onClick={() => {
						window.location.href = url;
					}}
				>
					<img src={article.image} alt={"news"} /> <br />
					<p>{article.title}</p>
				</div>
			</>
		);
	});
	const main = news.filter((article, index) => {
		return index === 0;
	});
	const renderMain = main.map((article, index) => {
		const url = article.url;
		return (
			<div
				id="smaincard"
				key={index}
				onClick={() => {
					window.location.href = url;
				}}
			>
				<img src={article.image} alt="close" />
				<p>
					{article.title}
					<br />
				</p>
			</div>
		);
	});
	const headlines = news.filter((article, index) => {
		return index <= 2;
	});
	const renderHeadlines = headlines.map((article, index) => {
		const url = article.url;
		return (
			<div
				id="sheadlines-news"
				key={index}
				onClick={() => {
					window.location.href = url;
				}}
			>
				<p> {article.title}</p>
			</div>
		);
	});
	return loading ? (
		<Loading visible={loading} />
	) : (
		<>
			<h1 id="sh1">General</h1>
			<br />
			<div id="scontainer">
				{renderMain}
				<div id="sheadlines">
					<h2 id="sh2">Headlines</h2>
					{renderHeadlines}
				</div>
			</div>
			<div id="scontainer1">{renderNews}</div>
		</>
	);
};

export default Sports;
