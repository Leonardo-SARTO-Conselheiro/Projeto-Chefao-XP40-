
import ProductCarousel from "../../components/ProductCarousel";
import Newsletter from "../../components/Newsletter";
import Carousel from "../../components/Carousel";

import { Title, Wrapper, ContainerSeals } from './style';
import BallComponent from "../../components/BallComponent";

import React from "react";

function Home (){
    const [categories, setCategories] = React.useState(null);

    React.useEffect(() => {
      fetch("/categorias")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }, []);

    return(
        <main>
            <Carousel></Carousel>
            <Title> PRODUTOS </Title>
            <Wrapper>
                {!categories ? "Carregando categorias..." : categories.map((categoria, index) => 
                    <BallComponent image={categoria.link_imagem} label={categoria.nome} size="medium" key={categoria.id}/> 
                    )}
            </Wrapper> 
            <ContainerSeals>
                <BallComponent image="\images\products\aromatizante.jpg" size="small"/> 
                <BallComponent image="\images\products\aromatizante.jpg" size="small"/> 
                <BallComponent image="\images\products\aromatizante.jpg" size="small"/> 
            </ContainerSeals>           
            <Title> RECOMENDADOS </Title>
            <ProductCarousel/> 
            <img src="\images\natugamabox.png"></img>
            <Newsletter />
            
        </main>


    );

}


export default Home