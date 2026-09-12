import BodyTitle from "../../components/BodyTitle/BodyTitle";
import FilmCard from "../../components/FilmCard/FilmCard";
import FilmList from "../../components/FilmList/FilmList";
import InputForm from "../../components/InputForm/InputForm";
import { data } from "../../data/data";

export function Menu() {
	return (
		<>
			<BodyTitle />
			<InputForm />
			<FilmList>
				{data.map(film => (
					<FilmCard
						id={film.id}
						key={film.id}
						img={film.img}
						title={film.title}
						rating={film.rating}
					/>
				))}
			</FilmList>
		</>
	);
}