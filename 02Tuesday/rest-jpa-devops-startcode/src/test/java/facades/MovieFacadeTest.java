package facades;

import dtos.MovieDTO;
import utils.EMF_Creator;
import entities.Movie;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

//Uncomment the line below, to temporarily disable this test
//@Disabled
public class MovieFacadeTest {

    private static EntityManagerFactory emf;
    private static MovieFacade facade;
    private static List<Movie> movies;

    public MovieFacadeTest() {
    }

    @BeforeAll
    public static void setUpClass() {
        emf = EMF_Creator.createEntityManagerFactoryForTest();
        facade = MovieFacade.getFacadeExample(emf);
        movies = new ArrayList();
    }

    @AfterAll
    public static void tearDownClass() {
        EntityManager em = emf.createEntityManager();
        movies.add(new Movie(1990, "TestMovie"));
        movies.add(new Movie(2000, "Best_Movie_Ever"));
        try {
            em.getTransaction().begin();
            em.createNamedQuery("Movie.deleteAllRows").executeUpdate();
            em.persist(movies.get(0));
            em.persist(movies.get(1));

            em.getTransaction().commit();
        } finally {
            em.close();
        }
        emf.close();
        
    }

    // Setup the DataBase in a known state BEFORE EACH TEST
    //TODO -- Make sure to change the script below to use YOUR OWN entity class
    @BeforeEach
    public void setUp() {
        EntityManager em = emf.createEntityManager();
        movies.add(new Movie(1990, "TestMovie"));
        movies.add(new Movie(2000, "Best_Movie_Ever"));
        try {
            em.getTransaction().begin();
            em.createNamedQuery("Movie.deleteAllRows").executeUpdate();
            em.persist(movies.get(0));
            em.persist(movies.get(1));

            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

    @AfterEach
    public void tearDown() {
        movies.clear();
    }

    // TODO: Delete or change this method 
    @Test
    public void testGetMovieCount() {
        assertEquals(2, facade.getMovieCount(), "Expects two rows in the database");
    }

    @Test
    public void testGetMovieById() {
        Movie expected = movies.get(0);

        Movie actual = facade.getMovieById(expected.getId());

        assertEquals(expected, actual);
    }

    @Test
    public void testGetAllMovies() {
        List<Movie> expected = movies;

        List<Movie> actual = facade.getAllMovies();

        assertTrue(expected.containsAll(actual));
    }

    @Test
    public void testAddMovie() {
        int year = 2010;
        String title = "Decent_Movie";

        Movie expected = new Movie(year, title);

        Movie actual = facade.addMovie(year, title);

        assertEquals(expected, actual);
    }

}
