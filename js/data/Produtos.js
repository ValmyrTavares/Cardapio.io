const produtos = {
    bebidas:{
        cerveja:[
            {
                nome:"Brahma",
                desc:"LongNeck 350mo",
                preco: 12,
                imagem:"https://a-static.mlcdn.com.br/618x463/cerveja-brahma-1-litro-ambev/distribuidoraemercnaldo/1/0f987f3471c0e68850aa05a4bb5da7af.jpg",
                fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",

            },
            {
                nome:"Stella",
                desc:"LongNeck 350mo",
                preco: 11,
                imagem:"https://www.imigrantesbebidas.com.br/bebida/images/products/full/2201-cerveja-stella-artois-sem-gl-ten-long-neck-330ml.jpg",
                fullDescription: "Aqui uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",
            },
            {
                nome:"Heineken",
                desc:"LongNeck 350mo",
                preco: 13,
                imagem:"https://statics.angeloni.com.br/super/files/produtos/4455949/4455949_1_zoom.jpg",
                fullDescription: "Nenhuma uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes",
            }
        ],
        destilados:[
            {
                nome:"Jack Daniels",
                desc:"1 dose 100ml",
                preco: 23,
                imagem:"https://www.imigrantesbebidas.com.br/bebida/images/products/full/6423_Whiskey_Jack_Daniels_1_L.jpg",
                fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",
            },
            {
                nome:"Tequila",
                desc:"1 dose 100ml",
                preco: 19,
                imagem:"https://www.imigrantesbebidas.com.br/bebida/images/products/full/7195_Tequila_Jose_Cuervo_Silver_750ml.jpg",
                fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",
            }
        ],
        sucos:[
            {
                nome:"Suco de Laranja",
                desc:"Natural",
                preco: 12,
                imagem:"https://i.pinimg.com/originals/9b/b6/f7/9bb6f7a1651bbfd67e745be6bf72bcf6.jpg",
                fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",

            },
            {
                nome:"Suco Detox",
                desc:"gengibre com hortelã",
                preco: 13,
                imagem:"https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/10/suco-detox-de-abacaxi-pinterest.jpg",
                fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",
            },
            {
                nome:"Suco de Uva",
                desc:"Poupa",
                preco: 10,
                imagem:"https://img.cybercook.com.br/receitas/612/suco-de-uva-natural.jpeg",
                fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",
            }
        ],
        drink:[
            {
                nome:"Manhattan",
                desc:"Jack Damiels com xuxu",
                preco: 22,
                imagem:"https://cdn.diffords.com/contrib/stock-images/2016/4/33/2016b6c73079e3757e1b704ec34776378632.jpg",
                fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",

            },
            {
                nome:"Marguerita",
                desc:"Tequila com Contreau",
                preco: 29,
                imagem:"https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/10/suco-detox-de-abacaxi-pinterest.jpg",
                fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",
            }           
        ],
        refrigerante:[
            {
                nome:"Coca Cola",
                desc:"Lata com 350ml",
                preco: 8,
                imagem:"https://static.clubeextra.com.br/img/uploads/1/510/677510.jpg",
                fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",

            },
            {
                nome:"Guarana",
                desc:"Lata com 350ml",
                preco: 8,
                imagem:"https://madeleinebakery.com.br/wp-content/uploads/2020/04/guarana.jpg",
                fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",
            }           
        ],
       
    },
    porcoes:[
        {
            nome:"Fritas",
            desc:"Porção serve duas pessoas",
            preco: 30,
            imagem:"https://melhorcomsaude.com.br/wp-content/uploads/2018/09/como-fazer-batatas-fritas-crocantes.jpg",
            fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",

        },
        {
            nome:"Manioca",
            desc:"Meia porção",
            preco: 34,
            imagem:"https://i.pinimg.com/originals/5b/6d/5c/5b6d5c163f66145e00fb5394e822aa6f.jpg",
            fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",
        },  
        {
            nome:"Pescada",
            desc:"Crocantes e sem espinho",
            preco: 34,
            imagem:"https://sugoi.pediae.com.br/wp-content/uploads/2020/04/202003271309_z6E4_4.jpg",
            fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",
        },    
        {
            nome:"Pastéis",
            desc:"10 unidades",
            preco: 34,
            imagem:"https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/belpastel/7_5ebd696885233.jpg",
            fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",
        }, 
        {
            nome:"Frango Frito",
            desc:"2 pessoas",
            preco: 36,
            imagem:"https://amp.receitadevovo.com.br/wp-content/uploads/2020/10/empanados-de-frango.jpg",
            fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",
        },            
    ],
    lanches:[
        {
            nome:"X Salada",
            desc:"Hamburguer queijo tomate...",
            preco: 30,
            imagem:"https://giovani.pw/wp-content/uploads/2020/05/xborg_lacerda.jpg",
            fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",

        },
        {
            nome:"Americano",
            desc:"Pão tomate, presunto..",
            preco: 34,
            imagem:"https://culinaria.culturamix.com/blog/wp-content/uploads/2010/07/Famoso.jpg",
            fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",
        },  
        {
            nome:"Mortadela",
            desc:"Mortadella Italiana com ...",
            preco: 24,
            imagem:"https://s2.glbimg.com/MblBzUH-1JK4aceT72OqUCU8VK4=/512x320/smart/e.glbimg.com/og/ed/f/original/2017/08/24/mortadela.jpg",
            fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",
        },    
                  
    ],
    pratos:[
        {
            nome:"Frango a Parmegiana",
            desc:"Prato individual..",
            preco: 17,
            imagem:"https://img.itdg.com.br/tdg/images/recipes/000/166/469/136274/136274_original.jpg?mode=crop&width=710&height=400",
            fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",

        },
        {
            nome:"Feijão e Arroz",
            desc:"Acompanha salada de tomate",
            preco: 18,
            imagem:"https://odia.ig.com.br/_midias/jpg/2020/09/23/1140x632/1_arroz_e_feijao-19737672.jpg",
            fullDescription: "Essa uma cerveja para vc comemorar os grande momentos da sua vida porque eles não acontecem duas vezes ",
        },          
                  
    ]
}

export default produtos;