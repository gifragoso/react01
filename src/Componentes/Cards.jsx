import { Subtitle } from "./Subtitle";
import { Text } from "./Text";
import { Image } from "./Image";
import { Header } from "./Header";
export function Cards() {
    return(
        <div>
            <div>
                <Subtitle texto="Meus conteúdos favoritos"/>
                <Header text="Olà,eu sou Gisele Fragoso"></Header>
                <Text 
                content="Tenho 29 anos, moro na cidade de Salvador Bahia. Sou aluna da turma On20 de front end da Reprogama, encontrei no Reprogama a oportunidade de poder escrever uma nova història. Essa è a minha primeira pagina React!"
                />         
            <Image link="https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/311584148_5921363677875168_4829666096425123905_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=js3ibuMPKN8AX8l8k48&_nc_ht=scontent-mad1-1.xx&oh=00_AfA7S95FLln8eF8YZCP118LFX8N9hSBxrTZTfz99oV5Ieg&oe=63A62BD4"/>
        </div>
        <div>
            <Subtitle texto="Git"/>
            <Text 
            content="O Git é um sistema para controlar versão de códigos e é usado pela grande maioria das pessoas desenvolvedoras atualmente. Isso significa dizer que usando o git a gente pode esquecer o medo de perder alguma alteração que a gente fez no nosso código"/>         
        <Image link="https://c.tenor.com/nVmk2ThKqzsAAAAC/flexing-issa-rae.gif"/>
    </div>
    <div>
            <Subtitle texto="HTML e CSS"/>
            <Text 
            content="HTML: linguagem de marcação utilizada para estruturar os elementos da página, como parágrafos, links, títulos, tabelas, imagens e até vídeos. CSS: linguagem de estilos utilizada para definir cores, fontes, tamanhos, posicionamento e qualquer outro valor estético para os elementos da página.
            "/>         
        <Image link="https://campuscode-site.s3-sa-east-1.amazonaws.com/newsletter/css1html+copy.gif"/>
    </div>
    <div>
            <Subtitle texto="JavaScript"/>
            <Text 
            content="Segundo o livro Estrutura de dados e algoritmos com javascript', de Loiane Groner: Javascript é uma das linguagens de programação mais populares atualmente, é conhecida como a linguagem da internet porque os navegadores a entendem de modo nativo, sem a instalação de qualquer plugin "/>         
        <Image link="https://i.gifer.com/fxl3.gif"/>
    </div>
        </div>
    )
}