import React from "react";

const iconComponents = [
  "https://i.pinimg.com/564x/fd/82/26/fd8226da88c30648433bff3e62fc4823.jpg",
  "https://i.pinimg.com/564x/3f/f0/18/3ff0182c281737ce1ac801e29d712d22.jpg",
  "https://i.pinimg.com/564x/17/cc/3b/17cc3bbcc7574d0023c483d26d37c669.jpg",
  "https://i.pinimg.com/564x/6f/ca/59/6fca59e565f0f31e27ad84dfc81a6744.jpg",
  "https://i.pinimg.com/564x/15/75/ad/1575ad723197389883311af75512faf5.jpg",
  "https://i.pinimg.com/564x/97/af/f3/97aff3886395be9eb58a110f80961951.jpg",
  "https://i.pinimg.com/564x/2f/a5/12/2fa5123f5cdaae9ecc1c9c93c6b132f8.jpg",
  "https://i.pinimg.com/564x/b8/c8/15/b8c815e203a32ab364af5a52ce3092de.jpg",
  "https://i.pinimg.com/564x/c2/4e/14/c24e14d22aa875f108ddf27d218a3cf6.jpg",
  "https://i.pinimg.com/564x/c5/04/a4/c504a4cb6903ec98c7a3497449837b21.jpg",
  "https://i.pinimg.com/564x/70/8c/cf/708ccfce8f18e8c5ef5cf1121fd328af.jpg",
  "https://i.pinimg.com/564x/e6/f2/fe/e6f2fea663174d6c399ba312768f7010.jpg",
  "https://i.pinimg.com/564x/57/61/da/5761da1aecdefbecd88be0b8d0b614e7.jpg",
  "https://i.pinimg.com/564x/77/f2/e4/77f2e4caf563e06b6fe9efb542ee76fc.jpg",
  "https://i.pinimg.com/564x/40/d2/b5/40d2b5271041886896ff8b08efed6112.jpg",
  "https://i.pinimg.com/564x/e0/67/d6/e067d60d6ead12a8fdaade48108d5a75.jpg",
  "https://i.pinimg.com/564x/c7/2e/c5/c72ec51b872a92e115750fd211962a32.jpg",
  "https://i.pinimg.com/564x/ba/c8/af/bac8af815bdff4b85f9e0754eba6b49c.jpg",
  "https://i.pinimg.com/564x/97/c9/08/97c9086bed00a9961c030ecfd00e84f9.jpg",
  "https://i.pinimg.com/564x/f9/8f/87/f98f875ada9049d93ed98349b567aae4.jpg",
  "https://i.pinimg.com/564x/fd/3b/8a/fd3b8a950a43f0fd28da39930289a410.jpg",
  "https://i.pinimg.com/564x/2b/98/b0/2b98b0cd3bcc4fed5086bacc88771208.jpg",
  "https://i.pinimg.com/564x/91/9a/1e/919a1e8b64e5ea2e41b9e452ac790e86.jpg",
  "https://i.pinimg.com/564x/b4/85/44/b485448940dce108cbea2d75f664517b.jpg",
  "https://i.pinimg.com/564x/af/83/70/af8370471e39585589e9b5f88c98e907.jpg",
];

function RandomIcon() {
  const randomIndex = Math.floor(Math.random() * iconComponents.length);

  return iconComponents[randomIndex];
}

export default RandomIcon;
