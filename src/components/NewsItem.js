import { formatTimeAgo } from "./FormatTimeAgo";
import React from "react";

function NewsItem(props) {
	let {
		desc, title, imageURL,
		newsUrl, sourceName, published
	} = props;
	return (
		<div className="car">
			<div className="card my-3">
				<img src={imageURL}
					className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="w-100 fs-6 
						text-body-secondary 
						text-end">
						- {sourceName}
					</p>
					<p className="card-text">{desc}</p>
					<a href={newsUrl}
						target="blank" // открывать в другой вкладке
						className="btn btn-primary btn-sm">
						Read More...
					</a>
				</div>
				{/* время публикации статьи */}
				<div class="card-footer">
				<small class="text-muted">{formatTimeAgo(published)}</small>
				</div>
			</div>
		</div>
	);
}

export default NewsItem;
