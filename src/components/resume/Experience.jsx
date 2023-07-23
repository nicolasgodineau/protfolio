import React from "react";
import theme from "../theme/theme.js";
import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    Box,
} from "@mui/material";
import { faCircle } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Experience({
    experience,
    lastExperienceId,
    delay,
    index,
}) {
    return (
        <Container
            component="div"
            disablegutters="true"
            key={index}
            sx={{
                [theme.breakpoints.down("sm")]: {
                    // Styles pour les écrans de largeur maximale 600px
                    padding: 0,
                },
                overflow: "hidden",
            }}
            data-aos="fade-up"
            data-aos-delay={`${delay}`}
        >
            {/* Conteneur pour chaque expérience */}
            <Container
                component="div"
                disablegutters="true"
                sx={{
                    position: "relative",
                    paddingLeft: 6,
                    paddingBottom: index === lastExperienceId + 1 ? "0px" : 6,
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 7,
                        left: 0,
                        width: "12px",
                        height: "12px",
                        borderRadius: "50px",
                        background:
                            index === 0
                                ? theme.palette.accent
                                : theme.palette.text.secondary,
                        zIndex: 10,
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        backgroundColor: "black",
                        top: 10,
                        left: 5,
                        width: "2px",
                        height: "100%",
                        borderRadius: "50px",
                        background: theme.palette.text.secondary,
                    },
                    [theme.breakpoints.down("sm")]: {
                        // Styles pour les écrans de largeur maximale 600px
                        paddingBottom: 0,
                        paddingLeft: 3,
                    },
                }}
            >
                {/* Affiche l'année de l'expérience */}
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <Typography
                        component="p"
                        sx={{
                            display: "block",
                            marginBottom: 2,
                            color:
                                index === 0
                                    ? theme.palette.accent
                                    : theme.palette.text.primary,
                        }}
                        data-aos="fade-left"
                        data-aos-delay="500"
                    >
                        {experience.year}
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            display: "block",
                            marginBottom: 2,
                            fontSize: "12px",
                            color: theme.palette.text.secondary,
                        }}
                        data-aos="fade-left"
                        data-aos-delay="700"
                    >
                        {experience.location}
                    </Typography>
                </Box>

                {/* Affiche le titre de l'expérience */}
                <Typography
                    component="h2"
                    sx={{
                        fontSize: "clamp(1.2rem, 4vw, 2rem)",
                        marginBottom: "5px",
                        color: theme.palette.text.primary,
                    }}
                    data-aos="fade-up"
                    data-aos-delay={`${delay}`}
                >
                    {experience.title.charAt(0).toUpperCase() +
                        experience.title.substring(1)}
                    {/* Récupère la première lettre de la phrase avec `charAt(0)` et la met en majuscule avec `toUpperCase()`. */}
                    {/* Concatène la première lettre en majuscule avec le reste du texte en utilisant `substring(1)`. */}
                </Typography>
                <Typography
                    component="h3"
                    sx={{
                        fontSize: "16px",
                        fontWeight: "regular",
                        marginBottom: "5px",
                        color: theme.palette.text.primary,
                    }}
                    data-aos="fade-up"
                    data-aos-delay={`${delay}`}
                >
                    {experience.subtitle.charAt(0).toUpperCase() +
                        experience.subtitle.substring(1)}
                    {/* Récupère la première lettre de la phrase avec `charAt(0)` et la met en majuscule avec `toUpperCase()`. */}
                    {/* Concatène la première lettre en majuscule avec le reste du texte en utilisant `substring(1)`. */}
                </Typography>

                {/* Affiche la description de l'expérience */}
                <List
                    component="ul"
                    className="listExperience"
                    dense={true}
                    sx={{ listStyle: "inside", listStyleType: "disc" }}
                    data-aos="fade-up"
                    data-aos-delay={`${delay}`}
                >
                    {experience.descriptions.map((description, index) => (
                        <ListItem
                            component="li"
                            alignItems="flex-start"
                            dense={true}
                            key={index}
                            sx={{
                                fontSize: "16px",
                                color: theme.palette.text.secondary,
                                paddingLeft: 3,
                            }}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <ListItemIcon
                                sx={{
                                    fontSize: 9,
                                    marginTop: 0,
                                    paddingTop: 1,
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    color={theme.palette.text.secondary}
                                    sx={{
                                        [theme.breakpoints.down("sm")]: {
                                            // Styles pour les écrans de largeur maximale 600px
                                            minWith: "24px",
                                        },
                                    }}
                                />
                            </ListItemIcon>
                            {description.line}
                        </ListItem>
                    ))}
                    {/*                     {textWithLineBreaks.map((line, index) => (
                        <ListItem
                            component="li"
                            alignItems="flex-start"
                            dense={true}
                            key={index}
                            sx={{
                                fontSize: "16px",
                                color: theme.palette.text.secondary,
                                paddingLeft: 3,
                            }}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <ListItemIcon
                                sx={{
                                    fontSize: 9,
                                    marginTop: 0,
                                    paddingTop: 1,
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    color={theme.palette.text.secondary}
                                    sx={{
                                        [theme.breakpoints.down("sm")]: {
                                            // Styles pour les écrans de largeur maximale 600px
                                            minWith: "24px",
                                        },
                                    }}
                                />
                            </ListItemIcon>
                            {line}
                        </ListItem>
                    ))} */}
                </List>
            </Container>
        </Container>
    );
}
