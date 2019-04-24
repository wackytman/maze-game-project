export var config = {
    maze: {
        name: "Dark House",
        description: "You Awaken in a unknown room in dark house",
        rooms: {
            room_1 : {
                description: 'You enter a room with 3 doors and there appears to be a long object in the center of the room',
                items: {
                   stick : {
                        name: 'Long Stick',
                        description: 'Just you average <strong>Long Stick</strong> does 2 dmg',
                        type: 'weapon',
                        effect_value: 2,
                        uses: 10
                    }
                },
                emenies: [],
                north_room_id: 'room_2',
                east_room_id: 'room_5',
                south_room_id: 'room_3',
                west_room_id: 0, 
                is_exit: false,
                exit_item: null
            },
            room_2 : {
                description: 'You enter a large room with 2 doors.',
                items: {
                },
                emenies: [{
                    health: 20,
                    damage: 2,
                    name: "Large Rodent",
                    items: {
                        potion: {
                        name: 'Health Potion',
                        description: 'Heals health by 20 points',
                        type: 'potion',
                        effect_value: 20,
                        }
                    },
                    entry_text: "You hear scratching from under the table and a large rat like creature appears ",
                    defeat_text: "A large screech comes from the rodent and you see something shining in its jaw"
                }],
                north_room_id: 0,
                east_room_id: 'room_5',
                south_room_id: 'room_1',
                west_room_id: 0, 
                is_exit: false,
                exit_item: null
            },
            room_3 : {
                description: 'You enter a room with 3 doors and there appears to be a long object in the center of the room',
                items: {
                    super_health_potion : {
                        name: 'Super Health Potion',
                        description: 'A red liquid that yeilds a mighty boost to ones wellbeing',
                        uses: 1,
                        effect_value: 200
                    }
                },
                emenies: [],
                north_room_id: 'room_1',
                east_room_id: 0,
                south_room_id: 0,
                west_room_id: 'room_4', 
                is_exit: false,
                exit_item: null
            },
            room_4 : {
                description: 'You enter a room with 1 door and what appears to be an exit',
                emenies: {ogre: {
                    health: 300,
                    damage: 2,
                    name: "Dark Ogre",
                    items: {
                        key_of_darkness: {
                        name: 'Key of Darkness',
                        description: 'Its a key what else could it be',
                        type: 'key',
                        effect_value: 0,
                        uses: 0,
                        }
                    },
                    entry_text: "A mighty roar is produced and he looks hangry. This <strong>Dark Ogre</strong> is far from his swamp",
                    defeat_text: "He turns to an ash pile on the floor. It looks like there is something in the ash pile"
                }},
                north_room_id: 0,
                east_room_id: 'room_3',
                south_room_id: 0,
                west_room_id: 0, 
                is_exit: true,
                exit_item: 'key_of_darkness'
            },
            room_5 : {
                description: 'You enter a room with 3 doors and there appears to be a long object in the center of the room',
                items: {
                    sword : {
                        name: 'Dark Sword',
                        description: 'A large <strong>Dark Sword</strong> emitting dark energy seems brittle though',
                        type: 'weapon',
                        uses: 3,
                        effect_value: 100,
                    },
                    
                },
                emenies: {
                    
                },
                north_room_id: 'room_2',
                east_room_id: 'room_1',
                south_room_id: 0,
                west_room_id: 0, 
                is_exit: false,
                exit_item: null
            }
        }

    }
}