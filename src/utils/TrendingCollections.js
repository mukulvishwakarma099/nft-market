import Puppy from "/images/collections/puppy.png";
import Mouse from "/images/collections/mouse.png";
import Bear from "/images/collections/bear.png";
import Mushroom_1 from "/images/collections/card2-mushroom1.png";
import Mushroom_2 from "/images/collections/card2-mushroom2.png";
import Mushroom_3 from "/images/collections/card2-mushroom3.png";
import Robot_1 from "/images/collections/card3-robot1.png";
import Robot_2 from "/images/collections/card3-robot2.png";
import Robot_3 from "/images/collections/card3-robot3.png";
import art1 from "/images/collections/art1.png";
import art2 from "/images/collections/art2.png";
import art3 from "/images/collections/art3.png";

export let collection = [
	{
		id: 1,
		url: Puppy,
		thumbnailOne: Mouse,
		thumbnailTwo: Bear,
		design: "DSGN Animals",
		artistName: "MrFox",
		avatar: art1,
	},

	{
		id: 2,
		url: Mushroom_1,
		thumbnailOne: Mushroom_2,
		thumbnailTwo: Mushroom_3,
		design: "Magic Mushrooms",
		artistName: "Shroomie",
		avatar: art2,
	},

	{
		id: 3,
		url: Robot_1,
		thumbnailOne: Robot_2,
		thumbnailTwo: Robot_3,
		design: "Disco Machines",
		artistName: "BeKind2Robots",
		avatar: art3,
	},
];
