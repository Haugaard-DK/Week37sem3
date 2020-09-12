package dtos;

import entities.Movie;

/**
 *
 * @author Mathias
 */
public class MovieDTO {

    private long id;
    private int year;
    private String title;

    public MovieDTO(Movie movie) {
        this.id = movie.getId();
        this.year = movie.getYear();
        this.title = movie.getTitle();
    }
    
    
}
