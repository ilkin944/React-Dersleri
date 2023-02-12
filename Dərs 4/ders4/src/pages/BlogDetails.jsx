import { useParams } from "react-router-dom";

export default function PostDetail() {

	const { url } = useParams()

	return (
		<>
			<h1>Blog Post Detalları səhifəsi</h1>
			<p>URL = {url}</p>
		</>
	)
}