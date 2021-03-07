interface EmoteDefs {
    [category: string]: Emote[];
}

interface Emote {
    names:              string[];
    surrogates:         string;
    unicodeVersion:     number;
    hasDiversity?:      boolean;
    diversityChildren?: DiversityChild[];
    hasMultiDiversity?: boolean;
}

interface DiversityChild {
    names:                    string[];
    surrogates:               string;
    unicodeVersion:           number;
    diversity:                string[];
    hasDiversityParent?:      boolean;
    hasMultiDiversityParent?: boolean;
}

type ShortcutDefs = ShortcutDef[];

interface ShortcutDef {
    emoji:     string;
    shortcuts: string[];
}

const emoteDefinitions: EmoteDefs = {
    "people": [{
        "names": ["grinning"],
        "surrogates": "😀",
        "unicodeVersion": 6.1
    }, {
        "names": ["smiley"],
        "surrogates": "😃",
        "unicodeVersion": 6
    }, {
        "names": ["smile"],
        "surrogates": "😄",
        "unicodeVersion": 6
    }, {
        "names": ["grin"],
        "surrogates": "😁",
        "unicodeVersion": 6
    }, {
        "names": ["laughing", "satisfied"],
        "surrogates": "😆",
        "unicodeVersion": 6
    }, {
        "names": ["sweat_smile"],
        "surrogates": "😅",
        "unicodeVersion": 6
    }, {
        "names": ["joy"],
        "surrogates": "😂",
        "unicodeVersion": 6
    }, {
        "names": ["rofl", "rolling_on_the_floor_laughing"],
        "surrogates": "🤣",
        "unicodeVersion": 9
    }, {
        "names": ["relaxed"],
        "surrogates": "☺️",
        "unicodeVersion": 1.1
    }, {
        "names": ["blush"],
        "surrogates": "😊",
        "unicodeVersion": 6
    }, {
        "names": ["innocent"],
        "surrogates": "😇",
        "unicodeVersion": 6
    }, {
        "names": ["slight_smile", "slightly_smiling_face"],
        "surrogates": "🙂",
        "unicodeVersion": 7
    }, {
        "names": ["upside_down", "upside_down_face"],
        "surrogates": "🙃",
        "unicodeVersion": 8
    }, {
        "names": ["wink"],
        "surrogates": "😉",
        "unicodeVersion": 6
    }, {
        "names": ["relieved"],
        "surrogates": "😌",
        "unicodeVersion": 6
    }, {
        "names": ["smiling_face_with_tear"],
        "surrogates": "🥲",
        "unicodeVersion": 13
    }, {
        "names": ["heart_eyes"],
        "surrogates": "😍",
        "unicodeVersion": 6
    }, {
        "names": ["smiling_face_with_3_hearts"],
        "surrogates": "🥰",
        "unicodeVersion": 11
    }, {
        "names": ["kissing_heart"],
        "surrogates": "😘",
        "unicodeVersion": 6
    }, {
        "names": ["kissing"],
        "surrogates": "😗",
        "unicodeVersion": 6.1
    }, {
        "names": ["kissing_smiling_eyes"],
        "surrogates": "😙",
        "unicodeVersion": 6.1
    }, {
        "names": ["kissing_closed_eyes"],
        "surrogates": "😚",
        "unicodeVersion": 6
    }, {
        "names": ["yum"],
        "surrogates": "😋",
        "unicodeVersion": 6
    }, {
        "names": ["stuck_out_tongue"],
        "surrogates": "😛",
        "unicodeVersion": 6.1
    }, {
        "names": ["stuck_out_tongue_closed_eyes"],
        "surrogates": "😝",
        "unicodeVersion": 6
    }, {
        "names": ["stuck_out_tongue_winking_eye"],
        "surrogates": "😜",
        "unicodeVersion": 6
    }, {
        "names": ["zany_face"],
        "surrogates": "🤪",
        "unicodeVersion": 10
    }, {
        "names": ["face_with_raised_eyebrow"],
        "surrogates": "🤨",
        "unicodeVersion": 10
    }, {
        "names": ["face_with_monocle"],
        "surrogates": "🧐",
        "unicodeVersion": 10
    }, {
        "names": ["nerd", "nerd_face"],
        "surrogates": "🤓",
        "unicodeVersion": 8
    }, {
        "names": ["sunglasses"],
        "surrogates": "😎",
        "unicodeVersion": 6
    }, {
        "names": ["star_struck"],
        "surrogates": "🤩",
        "unicodeVersion": 10
    }, {
        "names": ["partying_face"],
        "surrogates": "🥳",
        "unicodeVersion": 11
    }, {
        "names": ["smirk"],
        "surrogates": "😏",
        "unicodeVersion": 6
    }, {
        "names": ["unamused"],
        "surrogates": "😒",
        "unicodeVersion": 6
    }, {
        "names": ["disappointed"],
        "surrogates": "😞",
        "unicodeVersion": 6
    }, {
        "names": ["pensive"],
        "surrogates": "😔",
        "unicodeVersion": 6
    }, {
        "names": ["worried"],
        "surrogates": "😟",
        "unicodeVersion": 6.1
    }, {
        "names": ["confused"],
        "surrogates": "😕",
        "unicodeVersion": 6.1
    }, {
        "names": ["slight_frown", "slightly_frowning_face"],
        "surrogates": "🙁",
        "unicodeVersion": 7
    }, {
        "names": ["frowning2", "white_frowning_face"],
        "surrogates": "☹️",
        "unicodeVersion": 1.1
    }, {
        "names": ["persevere"],
        "surrogates": "😣",
        "unicodeVersion": 6
    }, {
        "names": ["confounded"],
        "surrogates": "😖",
        "unicodeVersion": 6
    }, {
        "names": ["tired_face"],
        "surrogates": "😫",
        "unicodeVersion": 6
    }, {
        "names": ["weary"],
        "surrogates": "😩",
        "unicodeVersion": 6
    }, {
        "names": ["pleading_face"],
        "surrogates": "🥺",
        "unicodeVersion": 11
    }, {
        "names": ["cry"],
        "surrogates": "😢",
        "unicodeVersion": 6
    }, {
        "names": ["sob"],
        "surrogates": "😭",
        "unicodeVersion": 6
    }, {
        "names": ["triumph"],
        "surrogates": "😤",
        "unicodeVersion": 6
    }, {
        "names": ["angry"],
        "surrogates": "😠",
        "unicodeVersion": 6
    }, {
        "names": ["rage"],
        "surrogates": "😡",
        "unicodeVersion": 6
    }, {
        "names": ["face_with_symbols_over_mouth"],
        "surrogates": "🤬",
        "unicodeVersion": 10
    }, {
        "names": ["exploding_head"],
        "surrogates": "🤯",
        "unicodeVersion": 10
    }, {
        "names": ["flushed"],
        "surrogates": "😳",
        "unicodeVersion": 6
    }, {
        "names": ["hot_face"],
        "surrogates": "🥵",
        "unicodeVersion": 11
    }, {
        "names": ["cold_face"],
        "surrogates": "🥶",
        "unicodeVersion": 11
    }, {
        "names": ["scream"],
        "surrogates": "😱",
        "unicodeVersion": 6
    }, {
        "names": ["fearful"],
        "surrogates": "😨",
        "unicodeVersion": 6
    }, {
        "names": ["cold_sweat"],
        "surrogates": "😰",
        "unicodeVersion": 6
    }, {
        "names": ["disappointed_relieved"],
        "surrogates": "😥",
        "unicodeVersion": 6
    }, {
        "names": ["sweat"],
        "surrogates": "😓",
        "unicodeVersion": 6
    }, {
        "names": ["hugging", "hugging_face"],
        "surrogates": "🤗",
        "unicodeVersion": 8
    }, {
        "names": ["thinking", "thinking_face"],
        "surrogates": "🤔",
        "unicodeVersion": 8
    }, {
        "names": ["face_with_hand_over_mouth"],
        "surrogates": "🤭",
        "unicodeVersion": 10
    }, {
        "names": ["yawning_face"],
        "surrogates": "🥱",
        "unicodeVersion": 12
    }, {
        "names": ["shushing_face"],
        "surrogates": "🤫",
        "unicodeVersion": 10
    }, {
        "names": ["lying_face", "liar"],
        "surrogates": "🤥",
        "unicodeVersion": 9
    }, {
        "names": ["no_mouth"],
        "surrogates": "😶",
        "unicodeVersion": 6
    }, {
        "names": ["neutral_face"],
        "surrogates": "😐",
        "unicodeVersion": 6
    }, {
        "names": ["expressionless"],
        "surrogates": "😑",
        "unicodeVersion": 6.1
    }, {
        "names": ["grimacing"],
        "surrogates": "😬",
        "unicodeVersion": 6.1
    }, {
        "names": ["rolling_eyes", "face_with_rolling_eyes"],
        "surrogates": "🙄",
        "unicodeVersion": 8
    }, {
        "names": ["hushed"],
        "surrogates": "😯",
        "unicodeVersion": 6.1
    }, {
        "names": ["frowning"],
        "surrogates": "😦",
        "unicodeVersion": 6.1
    }, {
        "names": ["anguished"],
        "surrogates": "😧",
        "unicodeVersion": 6.1
    }, {
        "names": ["open_mouth"],
        "surrogates": "😮",
        "unicodeVersion": 6.1
    }, {
        "names": ["astonished"],
        "surrogates": "😲",
        "unicodeVersion": 6
    }, {
        "names": ["sleeping"],
        "surrogates": "😴",
        "unicodeVersion": 6.1
    }, {
        "names": ["drooling_face", "drool"],
        "surrogates": "🤤",
        "unicodeVersion": 9
    }, {
        "names": ["sleepy"],
        "surrogates": "😪",
        "unicodeVersion": 6
    }, {
        "names": ["dizzy_face"],
        "surrogates": "😵",
        "unicodeVersion": 6
    }, {
        "names": ["zipper_mouth", "zipper_mouth_face"],
        "surrogates": "🤐",
        "unicodeVersion": 8
    }, {
        "names": ["woozy_face"],
        "surrogates": "🥴",
        "unicodeVersion": 11
    }, {
        "names": ["nauseated_face", "sick"],
        "surrogates": "🤢",
        "unicodeVersion": 9
    }, {
        "names": ["face_vomiting"],
        "surrogates": "🤮",
        "unicodeVersion": 10
    }, {
        "names": ["sneezing_face", "sneeze"],
        "surrogates": "🤧",
        "unicodeVersion": 9
    }, {
        "names": ["mask"],
        "surrogates": "😷",
        "unicodeVersion": 6
    }, {
        "names": ["thermometer_face", "face_with_thermometer"],
        "surrogates": "🤒",
        "unicodeVersion": 8
    }, {
        "names": ["head_bandage", "face_with_head_bandage"],
        "surrogates": "🤕",
        "unicodeVersion": 8
    }, {
        "names": ["money_mouth", "money_mouth_face"],
        "surrogates": "🤑",
        "unicodeVersion": 8
    }, {
        "names": ["cowboy", "face_with_cowboy_hat"],
        "surrogates": "🤠",
        "unicodeVersion": 9
    }, {
        "names": ["disguised_face"],
        "surrogates": "🥸",
        "unicodeVersion": 13
    }, {
        "names": ["smiling_imp"],
        "surrogates": "😈",
        "unicodeVersion": 6
    }, {
        "names": ["imp"],
        "surrogates": "👿",
        "unicodeVersion": 6
    }, {
        "names": ["japanese_ogre"],
        "surrogates": "👹",
        "unicodeVersion": 6
    }, {
        "names": ["japanese_goblin"],
        "surrogates": "👺",
        "unicodeVersion": 6
    }, {
        "names": ["clown", "clown_face"],
        "surrogates": "🤡",
        "unicodeVersion": 9
    }, {
        "names": ["poop", "shit", "hankey", "poo"],
        "surrogates": "💩",
        "unicodeVersion": 6
    }, {
        "names": ["ghost"],
        "surrogates": "👻",
        "unicodeVersion": 6
    }, {
        "names": ["skull", "skeleton"],
        "surrogates": "💀",
        "unicodeVersion": 6
    }, {
        "names": ["skull_crossbones", "skull_and_crossbones"],
        "surrogates": "☠️",
        "unicodeVersion": 1.1
    }, {
        "names": ["alien"],
        "surrogates": "👽",
        "unicodeVersion": 6
    }, {
        "names": ["space_invader"],
        "surrogates": "👾",
        "unicodeVersion": 6
    }, {
        "names": ["robot", "robot_face"],
        "surrogates": "🤖",
        "unicodeVersion": 8
    }, {
        "names": ["jack_o_lantern"],
        "surrogates": "🎃",
        "unicodeVersion": 6
    }, {
        "names": ["smiley_cat"],
        "surrogates": "😺",
        "unicodeVersion": 6
    }, {
        "names": ["smile_cat"],
        "surrogates": "😸",
        "unicodeVersion": 6
    }, {
        "names": ["joy_cat"],
        "surrogates": "😹",
        "unicodeVersion": 6
    }, {
        "names": ["heart_eyes_cat"],
        "surrogates": "😻",
        "unicodeVersion": 6
    }, {
        "names": ["smirk_cat"],
        "surrogates": "😼",
        "unicodeVersion": 6
    }, {
        "names": ["kissing_cat"],
        "surrogates": "😽",
        "unicodeVersion": 6
    }, {
        "names": ["scream_cat"],
        "surrogates": "🙀",
        "unicodeVersion": 6
    }, {
        "names": ["crying_cat_face"],
        "surrogates": "😿",
        "unicodeVersion": 6
    }, {
        "names": ["pouting_cat"],
        "surrogates": "😾",
        "unicodeVersion": 6
    }, {
        "names": ["palms_up_together"],
        "surrogates": "🤲",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["palms_up_together_tone1", "palms_up_together_light_skin_tone"],
            "surrogates": "🤲🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["palms_up_together_tone2", "palms_up_together_medium_light_skin_tone"],
            "surrogates": "🤲🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["palms_up_together_tone3", "palms_up_together_medium_skin_tone"],
            "surrogates": "🤲🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["palms_up_together_tone4", "palms_up_together_medium_dark_skin_tone"],
            "surrogates": "🤲🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["palms_up_together_tone5", "palms_up_together_dark_skin_tone"],
            "surrogates": "🤲🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["open_hands"],
        "surrogates": "👐",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["open_hands_tone1"],
            "surrogates": "👐🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["open_hands_tone2"],
            "surrogates": "👐🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["open_hands_tone3"],
            "surrogates": "👐🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["open_hands_tone4"],
            "surrogates": "👐🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["open_hands_tone5"],
            "surrogates": "👐🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["raised_hands"],
        "surrogates": "🙌",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["raised_hands_tone1"],
            "surrogates": "🙌🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["raised_hands_tone2"],
            "surrogates": "🙌🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["raised_hands_tone3"],
            "surrogates": "🙌🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["raised_hands_tone4"],
            "surrogates": "🙌🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["raised_hands_tone5"],
            "surrogates": "🙌🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["clap"],
        "surrogates": "👏",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["clap_tone1"],
            "surrogates": "👏🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["clap_tone2"],
            "surrogates": "👏🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["clap_tone3"],
            "surrogates": "👏🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["clap_tone4"],
            "surrogates": "👏🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["clap_tone5"],
            "surrogates": "👏🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["handshake", "shaking_hands"],
        "surrogates": "🤝",
        "unicodeVersion": 9
    }, {
        "names": ["thumbsup", "+1", "thumbup"],
        "surrogates": "👍",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["thumbsup_tone1", "+1_tone1", "thumbup_tone1"],
            "surrogates": "👍🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["thumbsup_tone2", "+1_tone2", "thumbup_tone2"],
            "surrogates": "👍🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["thumbsup_tone3", "+1_tone3", "thumbup_tone3"],
            "surrogates": "👍🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["thumbsup_tone4", "+1_tone4", "thumbup_tone4"],
            "surrogates": "👍🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["thumbsup_tone5", "+1_tone5", "thumbup_tone5"],
            "surrogates": "👍🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["thumbsdown", "-1", "thumbdown"],
        "surrogates": "👎",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["thumbsdown_tone1", "_1_tone1", "thumbdown_tone1"],
            "surrogates": "👎🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["thumbsdown_tone2", "_1_tone2", "thumbdown_tone2"],
            "surrogates": "👎🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["thumbsdown_tone3", "_1_tone3", "thumbdown_tone3"],
            "surrogates": "👎🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["thumbsdown_tone4", "_1_tone4", "thumbdown_tone4"],
            "surrogates": "👎🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["thumbsdown_tone5", "_1_tone5", "thumbdown_tone5"],
            "surrogates": "👎🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["punch"],
        "surrogates": "👊",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["punch_tone1"],
            "surrogates": "👊🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["punch_tone2"],
            "surrogates": "👊🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["punch_tone3"],
            "surrogates": "👊🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["punch_tone4"],
            "surrogates": "👊🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["punch_tone5"],
            "surrogates": "👊🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["fist"],
        "surrogates": "✊",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["fist_tone1"],
            "surrogates": "✊🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["fist_tone2"],
            "surrogates": "✊🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["fist_tone3"],
            "surrogates": "✊🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["fist_tone4"],
            "surrogates": "✊🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["fist_tone5"],
            "surrogates": "✊🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["left_facing_fist", "left_fist"],
        "surrogates": "🤛",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["left_facing_fist_tone1", "left_fist_tone1"],
            "surrogates": "🤛🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["left_facing_fist_tone2", "left_fist_tone2"],
            "surrogates": "🤛🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["left_facing_fist_tone3", "left_fist_tone3"],
            "surrogates": "🤛🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["left_facing_fist_tone4", "left_fist_tone4"],
            "surrogates": "🤛🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["left_facing_fist_tone5", "left_fist_tone5"],
            "surrogates": "🤛🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["right_facing_fist", "right_fist"],
        "surrogates": "🤜",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["right_facing_fist_tone1", "right_fist_tone1"],
            "surrogates": "🤜🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["right_facing_fist_tone2", "right_fist_tone2"],
            "surrogates": "🤜🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["right_facing_fist_tone3", "right_fist_tone3"],
            "surrogates": "🤜🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["right_facing_fist_tone4", "right_fist_tone4"],
            "surrogates": "🤜🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["right_facing_fist_tone5", "right_fist_tone5"],
            "surrogates": "🤜🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["fingers_crossed", "hand_with_index_and_middle_finger_crossed"],
        "surrogates": "🤞",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["fingers_crossed_tone1", "hand_with_index_and_middle_fingers_crossed_tone1"],
            "surrogates": "🤞🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["fingers_crossed_tone2", "hand_with_index_and_middle_fingers_crossed_tone2"],
            "surrogates": "🤞🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["fingers_crossed_tone3", "hand_with_index_and_middle_fingers_crossed_tone3"],
            "surrogates": "🤞🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["fingers_crossed_tone4", "hand_with_index_and_middle_fingers_crossed_tone4"],
            "surrogates": "🤞🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["fingers_crossed_tone5", "hand_with_index_and_middle_fingers_crossed_tone5"],
            "surrogates": "🤞🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["v"],
        "surrogates": "✌️",
        "unicodeVersion": 1.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["v_tone1"],
            "surrogates": "✌🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["v_tone2"],
            "surrogates": "✌🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["v_tone3"],
            "surrogates": "✌🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["v_tone4"],
            "surrogates": "✌🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["v_tone5"],
            "surrogates": "✌🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["love_you_gesture"],
        "surrogates": "🤟",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["love_you_gesture_tone1", "love_you_gesture_light_skin_tone"],
            "surrogates": "🤟🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["love_you_gesture_tone2", "love_you_gesture_medium_light_skin_tone"],
            "surrogates": "🤟🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["love_you_gesture_tone3", "love_you_gesture_medium_skin_tone"],
            "surrogates": "🤟🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["love_you_gesture_tone4", "love_you_gesture_medium_dark_skin_tone"],
            "surrogates": "🤟🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["love_you_gesture_tone5", "love_you_gesture_dark_skin_tone"],
            "surrogates": "🤟🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["metal", "sign_of_the_horns"],
        "surrogates": "🤘",
        "unicodeVersion": 8,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["metal_tone1", "sign_of_the_horns_tone1"],
            "surrogates": "🤘🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["metal_tone2", "sign_of_the_horns_tone2"],
            "surrogates": "🤘🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["metal_tone3", "sign_of_the_horns_tone3"],
            "surrogates": "🤘🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["metal_tone4", "sign_of_the_horns_tone4"],
            "surrogates": "🤘🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["metal_tone5", "sign_of_the_horns_tone5"],
            "surrogates": "🤘🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["ok_hand"],
        "surrogates": "👌",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["ok_hand_tone1"],
            "surrogates": "👌🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["ok_hand_tone2"],
            "surrogates": "👌🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["ok_hand_tone3"],
            "surrogates": "👌🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["ok_hand_tone4"],
            "surrogates": "👌🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["ok_hand_tone5"],
            "surrogates": "👌🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["pinching_hand"],
        "surrogates": "🤏",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["pinching_hand_tone1", "pinching_hand_light_skin_tone"],
            "surrogates": "🤏🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["pinching_hand_tone2", "pinching_hand_medium_light_skin_tone"],
            "surrogates": "🤏🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["pinching_hand_tone3", "pinching_hand_medium_skin_tone"],
            "surrogates": "🤏🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["pinching_hand_tone4", "pinching_hand_medium_dark_skin_tone"],
            "surrogates": "🤏🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["pinching_hand_tone5", "pinching_hand_dark_skin_tone"],
            "surrogates": "🤏🏿",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["pinched_fingers"],
        "surrogates": "🤌",
        "unicodeVersion": 13,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["pinched_fingers_tone2", "pinched_fingers_medium_light_skin_tone"],
            "surrogates": "🤌🏼",
            "unicodeVersion": 13,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["pinched_fingers_tone1", "pinched_fingers_light_skin_tone"],
            "surrogates": "🤌🏻",
            "unicodeVersion": 13,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["pinched_fingers_tone3", "pinched_fingers_medium_skin_tone"],
            "surrogates": "🤌🏽",
            "unicodeVersion": 13,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["pinched_fingers_tone4", "pinched_fingers_medium_dark_skin_tone"],
            "surrogates": "🤌🏾",
            "unicodeVersion": 13,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["pinched_fingers_tone5", "pinched_fingers_dark_skin_tone"],
            "surrogates": "🤌🏿",
            "unicodeVersion": 13,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["point_left"],
        "surrogates": "👈",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["point_left_tone1"],
            "surrogates": "👈🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["point_left_tone2"],
            "surrogates": "👈🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["point_left_tone3"],
            "surrogates": "👈🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["point_left_tone4"],
            "surrogates": "👈🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["point_left_tone5"],
            "surrogates": "👈🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["point_right"],
        "surrogates": "👉",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["point_right_tone1"],
            "surrogates": "👉🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["point_right_tone2"],
            "surrogates": "👉🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["point_right_tone3"],
            "surrogates": "👉🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["point_right_tone4"],
            "surrogates": "👉🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["point_right_tone5"],
            "surrogates": "👉🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["point_up_2"],
        "surrogates": "👆",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["point_up_2_tone1"],
            "surrogates": "👆🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["point_up_2_tone2"],
            "surrogates": "👆🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["point_up_2_tone3"],
            "surrogates": "👆🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["point_up_2_tone4"],
            "surrogates": "👆🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["point_up_2_tone5"],
            "surrogates": "👆🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["point_down"],
        "surrogates": "👇",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["point_down_tone1"],
            "surrogates": "👇🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["point_down_tone2"],
            "surrogates": "👇🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["point_down_tone3"],
            "surrogates": "👇🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["point_down_tone4"],
            "surrogates": "👇🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["point_down_tone5"],
            "surrogates": "👇🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["point_up"],
        "surrogates": "☝️",
        "unicodeVersion": 1.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["point_up_tone1"],
            "surrogates": "☝🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["point_up_tone2"],
            "surrogates": "☝🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["point_up_tone3"],
            "surrogates": "☝🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["point_up_tone4"],
            "surrogates": "☝🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["point_up_tone5"],
            "surrogates": "☝🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["raised_hand"],
        "surrogates": "✋",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["raised_hand_tone1"],
            "surrogates": "✋🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["raised_hand_tone2"],
            "surrogates": "✋🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["raised_hand_tone3"],
            "surrogates": "✋🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["raised_hand_tone4"],
            "surrogates": "✋🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["raised_hand_tone5"],
            "surrogates": "✋🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["raised_back_of_hand", "back_of_hand"],
        "surrogates": "🤚",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["raised_back_of_hand_tone1", "back_of_hand_tone1"],
            "surrogates": "🤚🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["raised_back_of_hand_tone2", "back_of_hand_tone2"],
            "surrogates": "🤚🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["raised_back_of_hand_tone3", "back_of_hand_tone3"],
            "surrogates": "🤚🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["raised_back_of_hand_tone4", "back_of_hand_tone4"],
            "surrogates": "🤚🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["raised_back_of_hand_tone5", "back_of_hand_tone5"],
            "surrogates": "🤚🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["hand_splayed", "raised_hand_with_fingers_splayed"],
        "surrogates": "🖐️",
        "unicodeVersion": 7,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["hand_splayed_tone1", "raised_hand_with_fingers_splayed_tone1"],
            "surrogates": "🖐🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["hand_splayed_tone2", "raised_hand_with_fingers_splayed_tone2"],
            "surrogates": "🖐🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["hand_splayed_tone3", "raised_hand_with_fingers_splayed_tone3"],
            "surrogates": "🖐🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["hand_splayed_tone4", "raised_hand_with_fingers_splayed_tone4"],
            "surrogates": "🖐🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["hand_splayed_tone5", "raised_hand_with_fingers_splayed_tone5"],
            "surrogates": "🖐🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["vulcan", "raised_hand_with_part_between_middle_and_ring_fingers"],
        "surrogates": "🖖",
        "unicodeVersion": 7,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["vulcan_tone1", "raised_hand_with_part_between_middle_and_ring_fingers_tone1"],
            "surrogates": "🖖🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["vulcan_tone2", "raised_hand_with_part_between_middle_and_ring_fingers_tone2"],
            "surrogates": "🖖🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["vulcan_tone3", "raised_hand_with_part_between_middle_and_ring_fingers_tone3"],
            "surrogates": "🖖🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["vulcan_tone4", "raised_hand_with_part_between_middle_and_ring_fingers_tone4"],
            "surrogates": "🖖🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["vulcan_tone5", "raised_hand_with_part_between_middle_and_ring_fingers_tone5"],
            "surrogates": "🖖🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["wave"],
        "surrogates": "👋",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["wave_tone1"],
            "surrogates": "👋🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["wave_tone2"],
            "surrogates": "👋🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["wave_tone3"],
            "surrogates": "👋🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["wave_tone4"],
            "surrogates": "👋🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["wave_tone5"],
            "surrogates": "👋🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["call_me", "call_me_hand"],
        "surrogates": "🤙",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["call_me_tone1", "call_me_hand_tone1"],
            "surrogates": "🤙🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["call_me_tone2", "call_me_hand_tone2"],
            "surrogates": "🤙🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["call_me_tone3", "call_me_hand_tone3"],
            "surrogates": "🤙🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["call_me_tone4", "call_me_hand_tone4"],
            "surrogates": "🤙🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["call_me_tone5", "call_me_hand_tone5"],
            "surrogates": "🤙🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["muscle"],
        "surrogates": "💪",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["muscle_tone1"],
            "surrogates": "💪🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["muscle_tone2"],
            "surrogates": "💪🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["muscle_tone3"],
            "surrogates": "💪🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["muscle_tone4"],
            "surrogates": "💪🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["muscle_tone5"],
            "surrogates": "💪🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["mechanical_arm"],
        "surrogates": "🦾",
        "unicodeVersion": 12
    }, {
        "names": ["middle_finger", "reversed_hand_with_middle_finger_extended"],
        "surrogates": "🖕",
        "unicodeVersion": 7,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["middle_finger_tone1", "reversed_hand_with_middle_finger_extended_tone1"],
            "surrogates": "🖕🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["middle_finger_tone2", "reversed_hand_with_middle_finger_extended_tone2"],
            "surrogates": "🖕🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["middle_finger_tone3", "reversed_hand_with_middle_finger_extended_tone3"],
            "surrogates": "🖕🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["middle_finger_tone4", "reversed_hand_with_middle_finger_extended_tone4"],
            "surrogates": "🖕🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["middle_finger_tone5", "reversed_hand_with_middle_finger_extended_tone5"],
            "surrogates": "🖕🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["writing_hand"],
        "surrogates": "✍️",
        "unicodeVersion": 1.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["writing_hand_tone1"],
            "surrogates": "✍🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["writing_hand_tone2"],
            "surrogates": "✍🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["writing_hand_tone3"],
            "surrogates": "✍🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["writing_hand_tone4"],
            "surrogates": "✍🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["writing_hand_tone5"],
            "surrogates": "✍🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["pray"],
        "surrogates": "🙏",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["pray_tone1"],
            "surrogates": "🙏🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["pray_tone2"],
            "surrogates": "🙏🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["pray_tone3"],
            "surrogates": "🙏🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["pray_tone4"],
            "surrogates": "🙏🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["pray_tone5"],
            "surrogates": "🙏🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["foot"],
        "surrogates": "🦶",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["foot_tone1", "foot_light_skin_tone"],
            "surrogates": "🦶🏻",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["foot_tone2", "foot_medium_light_skin_tone"],
            "surrogates": "🦶🏼",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["foot_tone3", "foot_medium_skin_tone"],
            "surrogates": "🦶🏽",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["foot_tone4", "foot_medium_dark_skin_tone"],
            "surrogates": "🦶🏾",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["foot_tone5", "foot_dark_skin_tone"],
            "surrogates": "🦶🏿",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["leg"],
        "surrogates": "🦵",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["leg_tone1", "leg_light_skin_tone"],
            "surrogates": "🦵🏻",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["leg_tone2", "leg_medium_light_skin_tone"],
            "surrogates": "🦵🏼",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["leg_tone3", "leg_medium_skin_tone"],
            "surrogates": "🦵🏽",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["leg_tone4", "leg_medium_dark_skin_tone"],
            "surrogates": "🦵🏾",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["leg_tone5", "leg_dark_skin_tone"],
            "surrogates": "🦵🏿",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["mechanical_leg"],
        "surrogates": "🦿",
        "unicodeVersion": 12
    }, {
        "names": ["lipstick"],
        "surrogates": "💄",
        "unicodeVersion": 6
    }, {
        "names": ["kiss"],
        "surrogates": "💋",
        "unicodeVersion": 6
    }, {
        "names": ["lips"],
        "surrogates": "👄",
        "unicodeVersion": 6
    }, {
        "names": ["tooth"],
        "surrogates": "🦷",
        "unicodeVersion": 11
    }, {
        "names": ["bone"],
        "surrogates": "🦴",
        "unicodeVersion": 11
    }, {
        "names": ["tongue"],
        "surrogates": "👅",
        "unicodeVersion": 6
    }, {
        "names": ["ear"],
        "surrogates": "👂",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["ear_tone1"],
            "surrogates": "👂🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["ear_tone2"],
            "surrogates": "👂🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["ear_tone3"],
            "surrogates": "👂🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["ear_tone4"],
            "surrogates": "👂🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["ear_tone5"],
            "surrogates": "👂🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["ear_with_hearing_aid"],
        "surrogates": "🦻",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["ear_with_hearing_aid_tone1", "ear_with_hearing_aid_light_skin_tone"],
            "surrogates": "🦻🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["ear_with_hearing_aid_tone2", "ear_with_hearing_aid_medium_light_skin_tone"],
            "surrogates": "🦻🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["ear_with_hearing_aid_tone3", "ear_with_hearing_aid_medium_skin_tone"],
            "surrogates": "🦻🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["ear_with_hearing_aid_tone4", "ear_with_hearing_aid_medium_dark_skin_tone"],
            "surrogates": "🦻🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["ear_with_hearing_aid_tone5", "ear_with_hearing_aid_dark_skin_tone"],
            "surrogates": "🦻🏿",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["nose"],
        "surrogates": "👃",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["nose_tone1"],
            "surrogates": "👃🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["nose_tone2"],
            "surrogates": "👃🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["nose_tone3"],
            "surrogates": "👃🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["nose_tone4"],
            "surrogates": "👃🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["nose_tone5"],
            "surrogates": "👃🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["footprints"],
        "surrogates": "👣",
        "unicodeVersion": 6
    }, {
        "names": ["eye"],
        "surrogates": "👁️",
        "unicodeVersion": 7
    }, {
        "names": ["eyes"],
        "surrogates": "👀",
        "unicodeVersion": 6
    }, {
        "names": ["brain"],
        "surrogates": "🧠",
        "unicodeVersion": 10
    }, {
        "names": ["anatomical_heart"],
        "surrogates": "🫀",
        "unicodeVersion": 13
    }, {
        "names": ["lungs"],
        "surrogates": "🫁",
        "unicodeVersion": 13
    }, {
        "names": ["speaking_head", "speaking_head_in_silhouette"],
        "surrogates": "🗣️",
        "unicodeVersion": 7
    }, {
        "names": ["bust_in_silhouette"],
        "surrogates": "👤",
        "unicodeVersion": 6
    }, {
        "names": ["busts_in_silhouette"],
        "surrogates": "👥",
        "unicodeVersion": 6
    }, {
        "names": ["people_hugging"],
        "surrogates": "🫂",
        "unicodeVersion": 13
    }, {
        "names": ["baby"],
        "surrogates": "👶",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["baby_tone1"],
            "surrogates": "👶🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["baby_tone2"],
            "surrogates": "👶🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["baby_tone3"],
            "surrogates": "👶🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["baby_tone4"],
            "surrogates": "👶🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["baby_tone5"],
            "surrogates": "👶🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["girl"],
        "surrogates": "👧",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["girl_tone1"],
            "surrogates": "👧🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["girl_tone2"],
            "surrogates": "👧🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["girl_tone3"],
            "surrogates": "👧🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["girl_tone4"],
            "surrogates": "👧🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["girl_tone5"],
            "surrogates": "👧🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["child"],
        "surrogates": "🧒",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["child_tone1", "child_light_skin_tone"],
            "surrogates": "🧒🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["child_tone2", "child_medium_light_skin_tone"],
            "surrogates": "🧒🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["child_tone3", "child_medium_skin_tone"],
            "surrogates": "🧒🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["child_tone4", "child_medium_dark_skin_tone"],
            "surrogates": "🧒🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["child_tone5", "child_dark_skin_tone"],
            "surrogates": "🧒🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["boy"],
        "surrogates": "👦",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["boy_tone1"],
            "surrogates": "👦🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["boy_tone2"],
            "surrogates": "👦🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["boy_tone3"],
            "surrogates": "👦🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["boy_tone4"],
            "surrogates": "👦🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["boy_tone5"],
            "surrogates": "👦🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman"],
        "surrogates": "👩",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_tone1"],
            "surrogates": "👩🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_tone2"],
            "surrogates": "👩🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_tone3"],
            "surrogates": "👩🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_tone4"],
            "surrogates": "👩🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_tone5"],
            "surrogates": "👩🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["adult"],
        "surrogates": "🧑",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["adult_tone1", "adult_light_skin_tone"],
            "surrogates": "🧑🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["adult_tone2", "adult_medium_light_skin_tone"],
            "surrogates": "🧑🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["adult_tone3", "adult_medium_skin_tone"],
            "surrogates": "🧑🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["adult_tone4", "adult_medium_dark_skin_tone"],
            "surrogates": "🧑🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["adult_tone5", "adult_dark_skin_tone"],
            "surrogates": "🧑🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man"],
        "surrogates": "👨",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_tone1"],
            "surrogates": "👨🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_tone2"],
            "surrogates": "👨🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_tone3"],
            "surrogates": "👨🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_tone4"],
            "surrogates": "👨🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_tone5"],
            "surrogates": "👨🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_curly_hair"],
        "surrogates": "🧑‍🦱",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_tone1_curly_hair", "person_light_skin_tone_curly_hair"],
            "surrogates": "🧑🏻‍🦱",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone2_curly_hair", "person_medium_light_skin_tone_curly_hair"],
            "surrogates": "🧑🏼‍🦱",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone3_curly_hair", "person_medium_skin_tone_curly_hair"],
            "surrogates": "🧑🏽‍🦱",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone4_curly_hair", "person_medium_dark_skin_tone_curly_hair"],
            "surrogates": "🧑🏾‍🦱",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone5_curly_hair", "person_dark_skin_tone_curly_hair"],
            "surrogates": "🧑🏿‍🦱",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_curly_haired"],
        "surrogates": "👩‍🦱",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_curly_haired_tone1", "woman_curly_haired_light_skin_tone"],
            "surrogates": "👩🏻‍🦱",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_curly_haired_tone2", "woman_curly_haired_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🦱",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_curly_haired_tone3", "woman_curly_haired_medium_skin_tone"],
            "surrogates": "👩🏽‍🦱",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_curly_haired_tone4", "woman_curly_haired_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🦱",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_curly_haired_tone5", "woman_curly_haired_dark_skin_tone"],
            "surrogates": "👩🏿‍🦱",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_curly_haired"],
        "surrogates": "👨‍🦱",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_curly_haired_tone1", "man_curly_haired_light_skin_tone"],
            "surrogates": "👨🏻‍🦱",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_curly_haired_tone2", "man_curly_haired_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🦱",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_curly_haired_tone3", "man_curly_haired_medium_skin_tone"],
            "surrogates": "👨🏽‍🦱",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_curly_haired_tone4", "man_curly_haired_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🦱",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_curly_haired_tone5", "man_curly_haired_dark_skin_tone"],
            "surrogates": "👨🏿‍🦱",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_red_hair"],
        "surrogates": "🧑‍🦰",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_tone1_red_hair", "person_light_skin_tone_red_hair"],
            "surrogates": "🧑🏻‍🦰",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone2_red_hair", "person_medium_light_skin_tone_red_hair"],
            "surrogates": "🧑🏼‍🦰",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone3_red_hair", "person_medium_skin_tone_red_hair"],
            "surrogates": "🧑🏽‍🦰",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone4_red_hair", "person_medium_dark_skin_tone_red_hair"],
            "surrogates": "🧑🏾‍🦰",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone5_red_hair", "person_dark_skin_tone_red_hair"],
            "surrogates": "🧑🏿‍🦰",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_red_haired"],
        "surrogates": "👩‍🦰",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_red_haired_tone1", "woman_red_haired_light_skin_tone"],
            "surrogates": "👩🏻‍🦰",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_red_haired_tone2", "woman_red_haired_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🦰",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_red_haired_tone3", "woman_red_haired_medium_skin_tone"],
            "surrogates": "👩🏽‍🦰",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_red_haired_tone4", "woman_red_haired_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🦰",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_red_haired_tone5", "woman_red_haired_dark_skin_tone"],
            "surrogates": "👩🏿‍🦰",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_red_haired"],
        "surrogates": "👨‍🦰",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_red_haired_tone1", "man_red_haired_light_skin_tone"],
            "surrogates": "👨🏻‍🦰",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_red_haired_tone2", "man_red_haired_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🦰",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_red_haired_tone3", "man_red_haired_medium_skin_tone"],
            "surrogates": "👨🏽‍🦰",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_red_haired_tone4", "man_red_haired_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🦰",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_red_haired_tone5", "man_red_haired_dark_skin_tone"],
            "surrogates": "👨🏿‍🦰",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["blond_haired_woman"],
        "surrogates": "👱‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["blond_haired_woman_tone1", "blond_haired_woman_light_skin_tone"],
            "surrogates": "👱🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["blond_haired_woman_tone2", "blond_haired_woman_medium_light_skin_tone"],
            "surrogates": "👱🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["blond_haired_woman_tone3", "blond_haired_woman_medium_skin_tone"],
            "surrogates": "👱🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["blond_haired_woman_tone4", "blond_haired_woman_medium_dark_skin_tone"],
            "surrogates": "👱🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["blond_haired_woman_tone5", "blond_haired_woman_dark_skin_tone"],
            "surrogates": "👱🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["blond_haired_person", "person_with_blond_hair"],
        "surrogates": "👱",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["blond_haired_person_tone1", "person_with_blond_hair_tone1"],
            "surrogates": "👱🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["blond_haired_person_tone2", "person_with_blond_hair_tone2"],
            "surrogates": "👱🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["blond_haired_person_tone3", "person_with_blond_hair_tone3"],
            "surrogates": "👱🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["blond_haired_person_tone4", "person_with_blond_hair_tone4"],
            "surrogates": "👱🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["blond_haired_person_tone5", "person_with_blond_hair_tone5"],
            "surrogates": "👱🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["blond_haired_man"],
        "surrogates": "👱‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["blond_haired_man_tone1", "blond_haired_man_light_skin_tone"],
            "surrogates": "👱🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["blond_haired_man_tone2", "blond_haired_man_medium_light_skin_tone"],
            "surrogates": "👱🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["blond_haired_man_tone3", "blond_haired_man_medium_skin_tone"],
            "surrogates": "👱🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["blond_haired_man_tone4", "blond_haired_man_medium_dark_skin_tone"],
            "surrogates": "👱🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["blond_haired_man_tone5", "blond_haired_man_dark_skin_tone"],
            "surrogates": "👱🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_white_hair"],
        "surrogates": "🧑‍🦳",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_tone1_white_hair", "person_light_skin_tone_white_hair"],
            "surrogates": "🧑🏻‍🦳",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone2_white_hair", "person_medium_light_skin_tone_white_hair"],
            "surrogates": "🧑🏼‍🦳",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone3_white_hair", "person_medium_skin_tone_white_hair"],
            "surrogates": "🧑🏽‍🦳",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone4_white_hair", "person_medium_dark_skin_tone_white_hair"],
            "surrogates": "🧑🏾‍🦳",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone5_white_hair", "person_dark_skin_tone_white_hair"],
            "surrogates": "🧑🏿‍🦳",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_white_haired"],
        "surrogates": "👩‍🦳",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_white_haired_tone1", "woman_white_haired_light_skin_tone"],
            "surrogates": "👩🏻‍🦳",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_white_haired_tone2", "woman_white_haired_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🦳",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_white_haired_tone3", "woman_white_haired_medium_skin_tone"],
            "surrogates": "👩🏽‍🦳",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_white_haired_tone4", "woman_white_haired_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🦳",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_white_haired_tone5", "woman_white_haired_dark_skin_tone"],
            "surrogates": "👩🏿‍🦳",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_white_haired"],
        "surrogates": "👨‍🦳",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_white_haired_tone1", "man_white_haired_light_skin_tone"],
            "surrogates": "👨🏻‍🦳",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_white_haired_tone2", "man_white_haired_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🦳",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_white_haired_tone3", "man_white_haired_medium_skin_tone"],
            "surrogates": "👨🏽‍🦳",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_white_haired_tone4", "man_white_haired_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🦳",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_white_haired_tone5", "man_white_haired_dark_skin_tone"],
            "surrogates": "👨🏿‍🦳",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_bald"],
        "surrogates": "🧑‍🦲",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_tone1_bald", "person_light_skin_tone_bald"],
            "surrogates": "🧑🏻‍🦲",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone2_bald", "person_medium_light_skin_tone_bald"],
            "surrogates": "🧑🏼‍🦲",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone3_bald", "person_medium_skin_tone_bald"],
            "surrogates": "🧑🏽‍🦲",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone4_bald", "person_medium_dark_skin_tone_bald"],
            "surrogates": "🧑🏾‍🦲",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tone5_bald", "person_dark_skin_tone_bald"],
            "surrogates": "🧑🏿‍🦲",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_bald"],
        "surrogates": "👩‍🦲",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_bald_tone1", "woman_bald_light_skin_tone"],
            "surrogates": "👩🏻‍🦲",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_bald_tone2", "woman_bald_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🦲",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_bald_tone3", "woman_bald_medium_skin_tone"],
            "surrogates": "👩🏽‍🦲",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_bald_tone4", "woman_bald_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🦲",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_bald_tone5", "woman_bald_dark_skin_tone"],
            "surrogates": "👩🏿‍🦲",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_bald"],
        "surrogates": "👨‍🦲",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_bald_tone1", "man_bald_light_skin_tone"],
            "surrogates": "👨🏻‍🦲",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_bald_tone2", "man_bald_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🦲",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_bald_tone3", "man_bald_medium_skin_tone"],
            "surrogates": "👨🏽‍🦲",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_bald_tone4", "man_bald_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🦲",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_bald_tone5", "man_bald_dark_skin_tone"],
            "surrogates": "👨🏿‍🦲",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["bearded_person"],
        "surrogates": "🧔",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["bearded_person_tone1", "bearded_person_light_skin_tone"],
            "surrogates": "🧔🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["bearded_person_tone2", "bearded_person_medium_light_skin_tone"],
            "surrogates": "🧔🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["bearded_person_tone3", "bearded_person_medium_skin_tone"],
            "surrogates": "🧔🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["bearded_person_tone4", "bearded_person_medium_dark_skin_tone"],
            "surrogates": "🧔🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["bearded_person_tone5", "bearded_person_dark_skin_tone"],
            "surrogates": "🧔🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["older_woman", "grandma"],
        "surrogates": "👵",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["older_woman_tone1", "grandma_tone1"],
            "surrogates": "👵🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["older_woman_tone2", "grandma_tone2"],
            "surrogates": "👵🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["older_woman_tone3", "grandma_tone3"],
            "surrogates": "👵🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["older_woman_tone4", "grandma_tone4"],
            "surrogates": "👵🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["older_woman_tone5", "grandma_tone5"],
            "surrogates": "👵🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["older_adult"],
        "surrogates": "🧓",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["older_adult_tone1", "older_adult_light_skin_tone"],
            "surrogates": "🧓🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["older_adult_tone2", "older_adult_medium_light_skin_tone"],
            "surrogates": "🧓🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["older_adult_tone3", "older_adult_medium_skin_tone"],
            "surrogates": "🧓🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["older_adult_tone4", "older_adult_medium_dark_skin_tone"],
            "surrogates": "🧓🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["older_adult_tone5", "older_adult_dark_skin_tone"],
            "surrogates": "🧓🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["older_man"],
        "surrogates": "👴",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["older_man_tone1"],
            "surrogates": "👴🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["older_man_tone2"],
            "surrogates": "👴🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["older_man_tone3"],
            "surrogates": "👴🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["older_man_tone4"],
            "surrogates": "👴🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["older_man_tone5"],
            "surrogates": "👴🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_with_chinese_cap", "man_with_gua_pi_mao"],
        "surrogates": "👲",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_with_chinese_cap_tone1", "man_with_gua_pi_mao_tone1"],
            "surrogates": "👲🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_with_chinese_cap_tone2", "man_with_gua_pi_mao_tone2"],
            "surrogates": "👲🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_with_chinese_cap_tone3", "man_with_gua_pi_mao_tone3"],
            "surrogates": "👲🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_with_chinese_cap_tone4", "man_with_gua_pi_mao_tone4"],
            "surrogates": "👲🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_with_chinese_cap_tone5", "man_with_gua_pi_mao_tone5"],
            "surrogates": "👲🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_wearing_turban", "man_with_turban"],
        "surrogates": "👳",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_wearing_turban_tone1", "man_with_turban_tone1"],
            "surrogates": "👳🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_wearing_turban_tone2", "man_with_turban_tone2"],
            "surrogates": "👳🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_wearing_turban_tone3", "man_with_turban_tone3"],
            "surrogates": "👳🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_wearing_turban_tone4", "man_with_turban_tone4"],
            "surrogates": "👳🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_wearing_turban_tone5", "man_with_turban_tone5"],
            "surrogates": "👳🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_wearing_turban"],
        "surrogates": "👳‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_wearing_turban_tone1", "woman_wearing_turban_light_skin_tone"],
            "surrogates": "👳🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_wearing_turban_tone2", "woman_wearing_turban_medium_light_skin_tone"],
            "surrogates": "👳🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_wearing_turban_tone3", "woman_wearing_turban_medium_skin_tone"],
            "surrogates": "👳🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_wearing_turban_tone4", "woman_wearing_turban_medium_dark_skin_tone"],
            "surrogates": "👳🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_wearing_turban_tone5", "woman_wearing_turban_dark_skin_tone"],
            "surrogates": "👳🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_wearing_turban"],
        "surrogates": "👳‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_wearing_turban_tone1", "man_wearing_turban_light_skin_tone"],
            "surrogates": "👳🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_wearing_turban_tone2", "man_wearing_turban_medium_light_skin_tone"],
            "surrogates": "👳🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_wearing_turban_tone3", "man_wearing_turban_medium_skin_tone"],
            "surrogates": "👳🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_wearing_turban_tone4", "man_wearing_turban_medium_dark_skin_tone"],
            "surrogates": "👳🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_wearing_turban_tone5", "man_wearing_turban_dark_skin_tone"],
            "surrogates": "👳🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_with_headscarf"],
        "surrogates": "🧕",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_with_headscarf_tone1", "woman_with_headscarf_light_skin_tone"],
            "surrogates": "🧕🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_with_headscarf_tone2", "woman_with_headscarf_medium_light_skin_tone"],
            "surrogates": "🧕🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_with_headscarf_tone3", "woman_with_headscarf_medium_skin_tone"],
            "surrogates": "🧕🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_with_headscarf_tone4", "woman_with_headscarf_medium_dark_skin_tone"],
            "surrogates": "🧕🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_with_headscarf_tone5", "woman_with_headscarf_dark_skin_tone"],
            "surrogates": "🧕🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["police_officer", "cop"],
        "surrogates": "👮",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["police_officer_tone1", "cop_tone1"],
            "surrogates": "👮🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["police_officer_tone2", "cop_tone2"],
            "surrogates": "👮🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["police_officer_tone3", "cop_tone3"],
            "surrogates": "👮🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["police_officer_tone4", "cop_tone4"],
            "surrogates": "👮🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["police_officer_tone5", "cop_tone5"],
            "surrogates": "👮🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_police_officer"],
        "surrogates": "👮‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_police_officer_tone1", "woman_police_officer_light_skin_tone"],
            "surrogates": "👮🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_police_officer_tone2", "woman_police_officer_medium_light_skin_tone"],
            "surrogates": "👮🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_police_officer_tone3", "woman_police_officer_medium_skin_tone"],
            "surrogates": "👮🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_police_officer_tone4", "woman_police_officer_medium_dark_skin_tone"],
            "surrogates": "👮🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_police_officer_tone5", "woman_police_officer_dark_skin_tone"],
            "surrogates": "👮🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_police_officer"],
        "surrogates": "👮‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_police_officer_tone1", "man_police_officer_light_skin_tone"],
            "surrogates": "👮🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_police_officer_tone2", "man_police_officer_medium_light_skin_tone"],
            "surrogates": "👮🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_police_officer_tone3", "man_police_officer_medium_skin_tone"],
            "surrogates": "👮🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_police_officer_tone4", "man_police_officer_medium_dark_skin_tone"],
            "surrogates": "👮🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_police_officer_tone5", "man_police_officer_dark_skin_tone"],
            "surrogates": "👮🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["construction_worker"],
        "surrogates": "👷",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["construction_worker_tone1"],
            "surrogates": "👷🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["construction_worker_tone2"],
            "surrogates": "👷🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["construction_worker_tone3"],
            "surrogates": "👷🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["construction_worker_tone4"],
            "surrogates": "👷🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["construction_worker_tone5"],
            "surrogates": "👷🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_construction_worker"],
        "surrogates": "👷‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_construction_worker_tone1", "woman_construction_worker_light_skin_tone"],
            "surrogates": "👷🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_construction_worker_tone2", "woman_construction_worker_medium_light_skin_tone"],
            "surrogates": "👷🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_construction_worker_tone3", "woman_construction_worker_medium_skin_tone"],
            "surrogates": "👷🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_construction_worker_tone4", "woman_construction_worker_medium_dark_skin_tone"],
            "surrogates": "👷🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_construction_worker_tone5", "woman_construction_worker_dark_skin_tone"],
            "surrogates": "👷🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_construction_worker"],
        "surrogates": "👷‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_construction_worker_tone1", "man_construction_worker_light_skin_tone"],
            "surrogates": "👷🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_construction_worker_tone2", "man_construction_worker_medium_light_skin_tone"],
            "surrogates": "👷🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_construction_worker_tone3", "man_construction_worker_medium_skin_tone"],
            "surrogates": "👷🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_construction_worker_tone4", "man_construction_worker_medium_dark_skin_tone"],
            "surrogates": "👷🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_construction_worker_tone5", "man_construction_worker_dark_skin_tone"],
            "surrogates": "👷🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["guard", "guardsman"],
        "surrogates": "💂",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["guard_tone1", "guardsman_tone1"],
            "surrogates": "💂🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["guard_tone2", "guardsman_tone2"],
            "surrogates": "💂🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["guard_tone3", "guardsman_tone3"],
            "surrogates": "💂🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["guard_tone4", "guardsman_tone4"],
            "surrogates": "💂🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["guard_tone5", "guardsman_tone5"],
            "surrogates": "💂🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_guard"],
        "surrogates": "💂‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_guard_tone1", "woman_guard_light_skin_tone"],
            "surrogates": "💂🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_guard_tone2", "woman_guard_medium_light_skin_tone"],
            "surrogates": "💂🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_guard_tone3", "woman_guard_medium_skin_tone"],
            "surrogates": "💂🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_guard_tone4", "woman_guard_medium_dark_skin_tone"],
            "surrogates": "💂🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_guard_tone5", "woman_guard_dark_skin_tone"],
            "surrogates": "💂🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_guard"],
        "surrogates": "💂‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_guard_tone1", "man_guard_light_skin_tone"],
            "surrogates": "💂🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_guard_tone2", "man_guard_medium_light_skin_tone"],
            "surrogates": "💂🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_guard_tone3", "man_guard_medium_skin_tone"],
            "surrogates": "💂🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_guard_tone4", "man_guard_medium_dark_skin_tone"],
            "surrogates": "💂🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_guard_tone5", "man_guard_dark_skin_tone"],
            "surrogates": "💂🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["detective", "spy", "sleuth_or_spy"],
        "surrogates": "🕵️",
        "unicodeVersion": 7,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["detective_tone1", "spy_tone1", "sleuth_or_spy_tone1"],
            "surrogates": "🕵🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["detective_tone2", "spy_tone2", "sleuth_or_spy_tone2"],
            "surrogates": "🕵🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["detective_tone3", "spy_tone3", "sleuth_or_spy_tone3"],
            "surrogates": "🕵🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["detective_tone4", "spy_tone4", "sleuth_or_spy_tone4"],
            "surrogates": "🕵🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["detective_tone5", "spy_tone5", "sleuth_or_spy_tone5"],
            "surrogates": "🕵🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_detective"],
        "surrogates": "🕵️‍♀️",
        "unicodeVersion": 7,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_detective_tone1", "woman_detective_light_skin_tone"],
            "surrogates": "🕵🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_detective_tone2", "woman_detective_medium_light_skin_tone"],
            "surrogates": "🕵🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_detective_tone3", "woman_detective_medium_skin_tone"],
            "surrogates": "🕵🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_detective_tone4", "woman_detective_medium_dark_skin_tone"],
            "surrogates": "🕵🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_detective_tone5", "woman_detective_dark_skin_tone"],
            "surrogates": "🕵🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_detective"],
        "surrogates": "🕵️‍♂️",
        "unicodeVersion": 7,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_detective_tone1", "man_detective_light_skin_tone"],
            "surrogates": "🕵🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_detective_tone2", "man_detective_medium_light_skin_tone"],
            "surrogates": "🕵🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_detective_tone3", "man_detective_medium_skin_tone"],
            "surrogates": "🕵🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_detective_tone4", "man_detective_medium_dark_skin_tone"],
            "surrogates": "🕵🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_detective_tone5", "man_detective_dark_skin_tone"],
            "surrogates": "🕵🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["health_worker"],
        "surrogates": "🧑‍⚕️",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["health_worker_tone1", "health_worker_light_skin_tone"],
            "surrogates": "🧑🏻‍⚕️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["health_worker_tone2", "health_worker_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍⚕️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["health_worker_tone3", "health_worker_medium_skin_tone"],
            "surrogates": "🧑🏽‍⚕️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["health_worker_tone4", "health_worker_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍⚕️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["health_worker_tone5", "health_worker_dark_skin_tone"],
            "surrogates": "🧑🏿‍⚕️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_health_worker"],
        "surrogates": "👩‍⚕️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_health_worker_tone1", "woman_health_worker_light_skin_tone"],
            "surrogates": "👩🏻‍⚕️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_health_worker_tone2", "woman_health_worker_medium_light_skin_tone"],
            "surrogates": "👩🏼‍⚕️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_health_worker_tone3", "woman_health_worker_medium_skin_tone"],
            "surrogates": "👩🏽‍⚕️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_health_worker_tone4", "woman_health_worker_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍⚕️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_health_worker_tone5", "woman_health_worker_dark_skin_tone"],
            "surrogates": "👩🏿‍⚕️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_health_worker"],
        "surrogates": "👨‍⚕️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_health_worker_tone1", "man_health_worker_light_skin_tone"],
            "surrogates": "👨🏻‍⚕️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_health_worker_tone2", "man_health_worker_medium_light_skin_tone"],
            "surrogates": "👨🏼‍⚕️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_health_worker_tone3", "man_health_worker_medium_skin_tone"],
            "surrogates": "👨🏽‍⚕️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_health_worker_tone4", "man_health_worker_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍⚕️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_health_worker_tone5", "man_health_worker_dark_skin_tone"],
            "surrogates": "👨🏿‍⚕️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["farmer"],
        "surrogates": "🧑‍🌾",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["farmer_tone1", "farmer_light_skin_tone"],
            "surrogates": "🧑🏻‍🌾",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["farmer_tone2", "farmer_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🌾",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["farmer_tone3", "farmer_medium_skin_tone"],
            "surrogates": "🧑🏽‍🌾",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["farmer_tone4", "farmer_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🌾",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["farmer_tone5", "farmer_dark_skin_tone"],
            "surrogates": "🧑🏿‍🌾",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_farmer"],
        "surrogates": "👩‍🌾",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_farmer_tone1", "woman_farmer_light_skin_tone"],
            "surrogates": "👩🏻‍🌾",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_farmer_tone2", "woman_farmer_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🌾",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_farmer_tone3", "woman_farmer_medium_skin_tone"],
            "surrogates": "👩🏽‍🌾",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_farmer_tone4", "woman_farmer_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🌾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_farmer_tone5", "woman_farmer_dark_skin_tone"],
            "surrogates": "👩🏿‍🌾",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_farmer"],
        "surrogates": "👨‍🌾",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_farmer_tone1", "man_farmer_light_skin_tone"],
            "surrogates": "👨🏻‍🌾",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_farmer_tone2", "man_farmer_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🌾",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_farmer_tone3", "man_farmer_medium_skin_tone"],
            "surrogates": "👨🏽‍🌾",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_farmer_tone4", "man_farmer_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🌾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_farmer_tone5", "man_farmer_dark_skin_tone"],
            "surrogates": "👨🏿‍🌾",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["cook"],
        "surrogates": "🧑‍🍳",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["cook_tone1", "cook_light_skin_tone"],
            "surrogates": "🧑🏻‍🍳",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["cook_tone2", "cook_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🍳",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["cook_tone3", "cook_medium_skin_tone"],
            "surrogates": "🧑🏽‍🍳",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["cook_tone4", "cook_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🍳",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["cook_tone5", "cook_dark_skin_tone"],
            "surrogates": "🧑🏿‍🍳",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_cook"],
        "surrogates": "👩‍🍳",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_cook_tone1", "woman_cook_light_skin_tone"],
            "surrogates": "👩🏻‍🍳",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_cook_tone2", "woman_cook_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🍳",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_cook_tone3", "woman_cook_medium_skin_tone"],
            "surrogates": "👩🏽‍🍳",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_cook_tone4", "woman_cook_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🍳",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_cook_tone5", "woman_cook_dark_skin_tone"],
            "surrogates": "👩🏿‍🍳",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_cook"],
        "surrogates": "👨‍🍳",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_cook_tone1", "man_cook_light_skin_tone"],
            "surrogates": "👨🏻‍🍳",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_cook_tone2", "man_cook_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🍳",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_cook_tone3", "man_cook_medium_skin_tone"],
            "surrogates": "👨🏽‍🍳",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_cook_tone4", "man_cook_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🍳",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_cook_tone5", "man_cook_dark_skin_tone"],
            "surrogates": "👨🏿‍🍳",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["student"],
        "surrogates": "🧑‍🎓",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["student_tone1", "student_light_skin_tone"],
            "surrogates": "🧑🏻‍🎓",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["student_tone2", "student_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🎓",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["student_tone3", "student_medium_skin_tone"],
            "surrogates": "🧑🏽‍🎓",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["student_tone4", "student_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🎓",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["student_tone5", "student_dark_skin_tone"],
            "surrogates": "🧑🏿‍🎓",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_student"],
        "surrogates": "👩‍🎓",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_student_tone1", "woman_student_light_skin_tone"],
            "surrogates": "👩🏻‍🎓",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_student_tone2", "woman_student_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🎓",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_student_tone3", "woman_student_medium_skin_tone"],
            "surrogates": "👩🏽‍🎓",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_student_tone4", "woman_student_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🎓",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_student_tone5", "woman_student_dark_skin_tone"],
            "surrogates": "👩🏿‍🎓",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_student"],
        "surrogates": "👨‍🎓",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_student_tone1", "man_student_light_skin_tone"],
            "surrogates": "👨🏻‍🎓",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_student_tone2", "man_student_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🎓",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_student_tone3", "man_student_medium_skin_tone"],
            "surrogates": "👨🏽‍🎓",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_student_tone4", "man_student_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🎓",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_student_tone5", "man_student_dark_skin_tone"],
            "surrogates": "👨🏿‍🎓",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["singer"],
        "surrogates": "🧑‍🎤",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["singer_tone1", "singer_light_skin_tone"],
            "surrogates": "🧑🏻‍🎤",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["singer_tone2", "singer_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🎤",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["singer_tone3", "singer_medium_skin_tone"],
            "surrogates": "🧑🏽‍🎤",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["singer_tone4", "singer_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🎤",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["singer_tone5", "singer_dark_skin_tone"],
            "surrogates": "🧑🏿‍🎤",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_singer"],
        "surrogates": "👩‍🎤",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_singer_tone1", "woman_singer_light_skin_tone"],
            "surrogates": "👩🏻‍🎤",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_singer_tone2", "woman_singer_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🎤",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_singer_tone3", "woman_singer_medium_skin_tone"],
            "surrogates": "👩🏽‍🎤",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_singer_tone4", "woman_singer_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🎤",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_singer_tone5", "woman_singer_dark_skin_tone"],
            "surrogates": "👩🏿‍🎤",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_singer"],
        "surrogates": "👨‍🎤",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_singer_tone1", "man_singer_light_skin_tone"],
            "surrogates": "👨🏻‍🎤",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_singer_tone2", "man_singer_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🎤",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_singer_tone3", "man_singer_medium_skin_tone"],
            "surrogates": "👨🏽‍🎤",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_singer_tone4", "man_singer_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🎤",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_singer_tone5", "man_singer_dark_skin_tone"],
            "surrogates": "👨🏿‍🎤",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["teacher"],
        "surrogates": "🧑‍🏫",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["teacher_tone1", "teacher_light_skin_tone"],
            "surrogates": "🧑🏻‍🏫",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["teacher_tone2", "teacher_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🏫",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["teacher_tone3", "teacher_medium_skin_tone"],
            "surrogates": "🧑🏽‍🏫",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["teacher_tone4", "teacher_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🏫",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["teacher_tone5", "teacher_dark_skin_tone"],
            "surrogates": "🧑🏿‍🏫",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_teacher"],
        "surrogates": "👩‍🏫",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_teacher_tone1", "woman_teacher_light_skin_tone"],
            "surrogates": "👩🏻‍🏫",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_teacher_tone2", "woman_teacher_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🏫",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_teacher_tone3", "woman_teacher_medium_skin_tone"],
            "surrogates": "👩🏽‍🏫",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_teacher_tone4", "woman_teacher_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🏫",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_teacher_tone5", "woman_teacher_dark_skin_tone"],
            "surrogates": "👩🏿‍🏫",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_teacher"],
        "surrogates": "👨‍🏫",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_teacher_tone1", "man_teacher_light_skin_tone"],
            "surrogates": "👨🏻‍🏫",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_teacher_tone2", "man_teacher_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🏫",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_teacher_tone3", "man_teacher_medium_skin_tone"],
            "surrogates": "👨🏽‍🏫",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_teacher_tone4", "man_teacher_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🏫",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_teacher_tone5", "man_teacher_dark_skin_tone"],
            "surrogates": "👨🏿‍🏫",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["factory_worker"],
        "surrogates": "🧑‍🏭",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["factory_worker_tone1", "factory_worker_light_skin_tone"],
            "surrogates": "🧑🏻‍🏭",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["factory_worker_tone2", "factory_worker_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🏭",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["factory_worker_tone3", "factory_worker_medium_skin_tone"],
            "surrogates": "🧑🏽‍🏭",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["factory_worker_tone4", "factory_worker_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🏭",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["factory_worker_tone5", "factory_worker_dark_skin_tone"],
            "surrogates": "🧑🏿‍🏭",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_factory_worker"],
        "surrogates": "👩‍🏭",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_factory_worker_tone1", "woman_factory_worker_light_skin_tone"],
            "surrogates": "👩🏻‍🏭",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_factory_worker_tone2", "woman_factory_worker_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🏭",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_factory_worker_tone3", "woman_factory_worker_medium_skin_tone"],
            "surrogates": "👩🏽‍🏭",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_factory_worker_tone4", "woman_factory_worker_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🏭",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_factory_worker_tone5", "woman_factory_worker_dark_skin_tone"],
            "surrogates": "👩🏿‍🏭",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_factory_worker"],
        "surrogates": "👨‍🏭",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_factory_worker_tone1", "man_factory_worker_light_skin_tone"],
            "surrogates": "👨🏻‍🏭",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_factory_worker_tone2", "man_factory_worker_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🏭",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_factory_worker_tone3", "man_factory_worker_medium_skin_tone"],
            "surrogates": "👨🏽‍🏭",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_factory_worker_tone4", "man_factory_worker_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🏭",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_factory_worker_tone5", "man_factory_worker_dark_skin_tone"],
            "surrogates": "👨🏿‍🏭",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["technologist"],
        "surrogates": "🧑‍💻",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["technologist_tone1", "technologist_light_skin_tone"],
            "surrogates": "🧑🏻‍💻",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["technologist_tone2", "technologist_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍💻",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["technologist_tone3", "technologist_medium_skin_tone"],
            "surrogates": "🧑🏽‍💻",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["technologist_tone4", "technologist_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍💻",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["technologist_tone5", "technologist_dark_skin_tone"],
            "surrogates": "🧑🏿‍💻",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_technologist"],
        "surrogates": "👩‍💻",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_technologist_tone1", "woman_technologist_light_skin_tone"],
            "surrogates": "👩🏻‍💻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_technologist_tone2", "woman_technologist_medium_light_skin_tone"],
            "surrogates": "👩🏼‍💻",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_technologist_tone3", "woman_technologist_medium_skin_tone"],
            "surrogates": "👩🏽‍💻",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_technologist_tone4", "woman_technologist_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍💻",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_technologist_tone5", "woman_technologist_dark_skin_tone"],
            "surrogates": "👩🏿‍💻",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_technologist"],
        "surrogates": "👨‍💻",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_technologist_tone1", "man_technologist_light_skin_tone"],
            "surrogates": "👨🏻‍💻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_technologist_tone2", "man_technologist_medium_light_skin_tone"],
            "surrogates": "👨🏼‍💻",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_technologist_tone3", "man_technologist_medium_skin_tone"],
            "surrogates": "👨🏽‍💻",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_technologist_tone4", "man_technologist_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍💻",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_technologist_tone5", "man_technologist_dark_skin_tone"],
            "surrogates": "👨🏿‍💻",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["office_worker"],
        "surrogates": "🧑‍💼",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["office_worker_tone1", "office_worker_light_skin_tone"],
            "surrogates": "🧑🏻‍💼",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["office_worker_tone2", "office_worker_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍💼",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["office_worker_tone3", "office_worker_medium_skin_tone"],
            "surrogates": "🧑🏽‍💼",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["office_worker_tone4", "office_worker_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍💼",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["office_worker_tone5", "office_worker_dark_skin_tone"],
            "surrogates": "🧑🏿‍💼",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_office_worker"],
        "surrogates": "👩‍💼",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_office_worker_tone1", "woman_office_worker_light_skin_tone"],
            "surrogates": "👩🏻‍💼",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_office_worker_tone2", "woman_office_worker_medium_light_skin_tone"],
            "surrogates": "👩🏼‍💼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_office_worker_tone3", "woman_office_worker_medium_skin_tone"],
            "surrogates": "👩🏽‍💼",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_office_worker_tone4", "woman_office_worker_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍💼",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_office_worker_tone5", "woman_office_worker_dark_skin_tone"],
            "surrogates": "👩🏿‍💼",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_office_worker"],
        "surrogates": "👨‍💼",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_office_worker_tone1", "man_office_worker_light_skin_tone"],
            "surrogates": "👨🏻‍💼",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_office_worker_tone2", "man_office_worker_medium_light_skin_tone"],
            "surrogates": "👨🏼‍💼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_office_worker_tone3", "man_office_worker_medium_skin_tone"],
            "surrogates": "👨🏽‍💼",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_office_worker_tone4", "man_office_worker_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍💼",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_office_worker_tone5", "man_office_worker_dark_skin_tone"],
            "surrogates": "👨🏿‍💼",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["mechanic"],
        "surrogates": "🧑‍🔧",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["mechanic_tone1", "mechanic_light_skin_tone"],
            "surrogates": "🧑🏻‍🔧",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["mechanic_tone2", "mechanic_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🔧",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["mechanic_tone3", "mechanic_medium_skin_tone"],
            "surrogates": "🧑🏽‍🔧",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["mechanic_tone4", "mechanic_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🔧",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["mechanic_tone5", "mechanic_dark_skin_tone"],
            "surrogates": "🧑🏿‍🔧",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_mechanic"],
        "surrogates": "👩‍🔧",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_mechanic_tone1", "woman_mechanic_light_skin_tone"],
            "surrogates": "👩🏻‍🔧",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_mechanic_tone2", "woman_mechanic_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🔧",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_mechanic_tone3", "woman_mechanic_medium_skin_tone"],
            "surrogates": "👩🏽‍🔧",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_mechanic_tone4", "woman_mechanic_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🔧",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_mechanic_tone5", "woman_mechanic_dark_skin_tone"],
            "surrogates": "👩🏿‍🔧",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_mechanic"],
        "surrogates": "👨‍🔧",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_mechanic_tone1", "man_mechanic_light_skin_tone"],
            "surrogates": "👨🏻‍🔧",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_mechanic_tone2", "man_mechanic_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🔧",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_mechanic_tone3", "man_mechanic_medium_skin_tone"],
            "surrogates": "👨🏽‍🔧",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_mechanic_tone4", "man_mechanic_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🔧",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_mechanic_tone5", "man_mechanic_dark_skin_tone"],
            "surrogates": "👨🏿‍🔧",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["scientist"],
        "surrogates": "🧑‍🔬",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["scientist_tone1", "scientist_light_skin_tone"],
            "surrogates": "🧑🏻‍🔬",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["scientist_tone2", "scientist_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🔬",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["scientist_tone3", "scientist_medium_skin_tone"],
            "surrogates": "🧑🏽‍🔬",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["scientist_tone4", "scientist_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🔬",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["scientist_tone5", "scientist_dark_skin_tone"],
            "surrogates": "🧑🏿‍🔬",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_scientist"],
        "surrogates": "👩‍🔬",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_scientist_tone1", "woman_scientist_light_skin_tone"],
            "surrogates": "👩🏻‍🔬",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_scientist_tone2", "woman_scientist_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🔬",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_scientist_tone3", "woman_scientist_medium_skin_tone"],
            "surrogates": "👩🏽‍🔬",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_scientist_tone4", "woman_scientist_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🔬",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_scientist_tone5", "woman_scientist_dark_skin_tone"],
            "surrogates": "👩🏿‍🔬",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_scientist"],
        "surrogates": "👨‍🔬",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_scientist_tone1", "man_scientist_light_skin_tone"],
            "surrogates": "👨🏻‍🔬",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_scientist_tone2", "man_scientist_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🔬",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_scientist_tone3", "man_scientist_medium_skin_tone"],
            "surrogates": "👨🏽‍🔬",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_scientist_tone4", "man_scientist_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🔬",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_scientist_tone5", "man_scientist_dark_skin_tone"],
            "surrogates": "👨🏿‍🔬",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["artist"],
        "surrogates": "🧑‍🎨",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["artist_tone1", "artist_light_skin_tone"],
            "surrogates": "🧑🏻‍🎨",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["artist_tone2", "artist_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🎨",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["artist_tone3", "artist_medium_skin_tone"],
            "surrogates": "🧑🏽‍🎨",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["artist_tone4", "artist_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🎨",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["artist_tone5", "artist_dark_skin_tone"],
            "surrogates": "🧑🏿‍🎨",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_artist"],
        "surrogates": "👩‍🎨",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_artist_tone1", "woman_artist_light_skin_tone"],
            "surrogates": "👩🏻‍🎨",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_artist_tone2", "woman_artist_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🎨",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_artist_tone3", "woman_artist_medium_skin_tone"],
            "surrogates": "👩🏽‍🎨",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_artist_tone4", "woman_artist_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🎨",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_artist_tone5", "woman_artist_dark_skin_tone"],
            "surrogates": "👩🏿‍🎨",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_artist"],
        "surrogates": "👨‍🎨",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_artist_tone1", "man_artist_light_skin_tone"],
            "surrogates": "👨🏻‍🎨",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_artist_tone2", "man_artist_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🎨",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_artist_tone3", "man_artist_medium_skin_tone"],
            "surrogates": "👨🏽‍🎨",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_artist_tone4", "man_artist_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🎨",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_artist_tone5", "man_artist_dark_skin_tone"],
            "surrogates": "👨🏿‍🎨",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["firefighter"],
        "surrogates": "🧑‍🚒",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["firefighter_tone1", "firefighter_light_skin_tone"],
            "surrogates": "🧑🏻‍🚒",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["firefighter_tone2", "firefighter_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🚒",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["firefighter_tone3", "firefighter_medium_skin_tone"],
            "surrogates": "🧑🏽‍🚒",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["firefighter_tone4", "firefighter_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🚒",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["firefighter_tone5", "firefighter_dark_skin_tone"],
            "surrogates": "🧑🏿‍🚒",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_firefighter"],
        "surrogates": "👩‍🚒",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_firefighter_tone1", "woman_firefighter_light_skin_tone"],
            "surrogates": "👩🏻‍🚒",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_firefighter_tone2", "woman_firefighter_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🚒",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_firefighter_tone3", "woman_firefighter_medium_skin_tone"],
            "surrogates": "👩🏽‍🚒",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_firefighter_tone4", "woman_firefighter_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🚒",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_firefighter_tone5", "woman_firefighter_dark_skin_tone"],
            "surrogates": "👩🏿‍🚒",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_firefighter"],
        "surrogates": "👨‍🚒",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_firefighter_tone1", "man_firefighter_light_skin_tone"],
            "surrogates": "👨🏻‍🚒",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_firefighter_tone2", "man_firefighter_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🚒",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_firefighter_tone3", "man_firefighter_medium_skin_tone"],
            "surrogates": "👨🏽‍🚒",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_firefighter_tone4", "man_firefighter_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🚒",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_firefighter_tone5", "man_firefighter_dark_skin_tone"],
            "surrogates": "👨🏿‍🚒",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["pilot"],
        "surrogates": "🧑‍✈️",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["pilot_tone1", "pilot_light_skin_tone"],
            "surrogates": "🧑🏻‍✈️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["pilot_tone2", "pilot_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍✈️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["pilot_tone3", "pilot_medium_skin_tone"],
            "surrogates": "🧑🏽‍✈️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["pilot_tone4", "pilot_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍✈️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["pilot_tone5", "pilot_dark_skin_tone"],
            "surrogates": "🧑🏿‍✈️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_pilot"],
        "surrogates": "👩‍✈️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_pilot_tone1", "woman_pilot_light_skin_tone"],
            "surrogates": "👩🏻‍✈️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_pilot_tone2", "woman_pilot_medium_light_skin_tone"],
            "surrogates": "👩🏼‍✈️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_pilot_tone3", "woman_pilot_medium_skin_tone"],
            "surrogates": "👩🏽‍✈️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_pilot_tone4", "woman_pilot_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍✈️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_pilot_tone5", "woman_pilot_dark_skin_tone"],
            "surrogates": "👩🏿‍✈️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_pilot"],
        "surrogates": "👨‍✈️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_pilot_tone1", "man_pilot_light_skin_tone"],
            "surrogates": "👨🏻‍✈️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_pilot_tone2", "man_pilot_medium_light_skin_tone"],
            "surrogates": "👨🏼‍✈️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_pilot_tone3", "man_pilot_medium_skin_tone"],
            "surrogates": "👨🏽‍✈️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_pilot_tone4", "man_pilot_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍✈️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_pilot_tone5", "man_pilot_dark_skin_tone"],
            "surrogates": "👨🏿‍✈️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["astronaut"],
        "surrogates": "🧑‍🚀",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["astronaut_tone1", "astronaut_light_skin_tone"],
            "surrogates": "🧑🏻‍🚀",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["astronaut_tone2", "astronaut_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🚀",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["astronaut_tone3", "astronaut_medium_skin_tone"],
            "surrogates": "🧑🏽‍🚀",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["astronaut_tone4", "astronaut_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🚀",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["astronaut_tone5", "astronaut_dark_skin_tone"],
            "surrogates": "🧑🏿‍🚀",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_astronaut"],
        "surrogates": "👩‍🚀",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_astronaut_tone1", "woman_astronaut_light_skin_tone"],
            "surrogates": "👩🏻‍🚀",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_astronaut_tone2", "woman_astronaut_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🚀",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_astronaut_tone3", "woman_astronaut_medium_skin_tone"],
            "surrogates": "👩🏽‍🚀",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_astronaut_tone4", "woman_astronaut_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🚀",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_astronaut_tone5", "woman_astronaut_dark_skin_tone"],
            "surrogates": "👩🏿‍🚀",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_astronaut"],
        "surrogates": "👨‍🚀",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_astronaut_tone1", "man_astronaut_light_skin_tone"],
            "surrogates": "👨🏻‍🚀",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_astronaut_tone2", "man_astronaut_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🚀",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_astronaut_tone3", "man_astronaut_medium_skin_tone"],
            "surrogates": "👨🏽‍🚀",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_astronaut_tone4", "man_astronaut_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🚀",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_astronaut_tone5", "man_astronaut_dark_skin_tone"],
            "surrogates": "👨🏿‍🚀",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["judge"],
        "surrogates": "🧑‍⚖️",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["judge_tone1", "judge_light_skin_tone"],
            "surrogates": "🧑🏻‍⚖️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["judge_tone2", "judge_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍⚖️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["judge_tone3", "judge_medium_skin_tone"],
            "surrogates": "🧑🏽‍⚖️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["judge_tone4", "judge_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍⚖️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["judge_tone5", "judge_dark_skin_tone"],
            "surrogates": "🧑🏿‍⚖️",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_judge"],
        "surrogates": "👩‍⚖️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_judge_tone1", "woman_judge_light_skin_tone"],
            "surrogates": "👩🏻‍⚖️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_judge_tone2", "woman_judge_medium_light_skin_tone"],
            "surrogates": "👩🏼‍⚖️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_judge_tone3", "woman_judge_medium_skin_tone"],
            "surrogates": "👩🏽‍⚖️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_judge_tone4", "woman_judge_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍⚖️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_judge_tone5", "woman_judge_dark_skin_tone"],
            "surrogates": "👩🏿‍⚖️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_judge"],
        "surrogates": "👨‍⚖️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_judge_tone1", "man_judge_light_skin_tone"],
            "surrogates": "👨🏻‍⚖️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_judge_tone2", "man_judge_medium_light_skin_tone"],
            "surrogates": "👨🏼‍⚖️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_judge_tone3", "man_judge_medium_skin_tone"],
            "surrogates": "👨🏽‍⚖️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_judge_tone4", "man_judge_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍⚖️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_judge_tone5", "man_judge_dark_skin_tone"],
            "surrogates": "👨🏿‍⚖️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_with_veil"],
        "surrogates": "👰",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_with_veil_tone1"],
            "surrogates": "👰🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_with_veil_tone2"],
            "surrogates": "👰🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_with_veil_tone3"],
            "surrogates": "👰🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_with_veil_tone4"],
            "surrogates": "👰🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_with_veil_tone5"],
            "surrogates": "👰🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_with_veil", "bride_with_veil"],
        "surrogates": "👰‍♀️",
        "unicodeVersion": 13,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_with_veil_tone1", "woman_with_veil_light_skin_tone"],
            "surrogates": "👰🏻‍♀️",
            "unicodeVersion": 13,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_with_veil_tone2", "woman_with_veil_medium_light_skin_tone"],
            "surrogates": "👰🏼‍♀️",
            "unicodeVersion": 13,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_with_veil_tone3", "woman_with_veil_medium_skin_tone"],
            "surrogates": "👰🏽‍♀️",
            "unicodeVersion": 13,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_with_veil_tone4", "woman_with_veil_medium_dark_skin_tone"],
            "surrogates": "👰🏾‍♀️",
            "unicodeVersion": 13,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_with_veil_tone5", "woman_with_veil_dark_skin_tone"],
            "surrogates": "👰🏿‍♀️",
            "unicodeVersion": 13,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_with_veil"],
        "surrogates": "👰‍♂️",
        "unicodeVersion": 13,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_with_veil_tone1", "man_with_veil_light_skin_tone"],
            "surrogates": "👰🏻‍♂️",
            "unicodeVersion": 13,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_with_veil_tone2", "man_with_veil_medium_light_skin_tone"],
            "surrogates": "👰🏼‍♂️",
            "unicodeVersion": 13,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_with_veil_tone3", "man_with_veil_medium_skin_tone"],
            "surrogates": "👰🏽‍♂️",
            "unicodeVersion": 13,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_with_veil_tone4", "man_with_veil_medium_dark_skin_tone"],
            "surrogates": "👰🏾‍♂️",
            "unicodeVersion": 13,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_with_veil_tone5", "man_with_veil_dark_skin_tone"],
            "surrogates": "👰🏿‍♂️",
            "unicodeVersion": 13,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_in_tuxedo"],
        "surrogates": "🤵",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_in_tuxedo_tone1", "tuxedo_tone1"],
            "surrogates": "🤵🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_tuxedo_tone2", "tuxedo_tone2"],
            "surrogates": "🤵🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_tuxedo_tone3", "tuxedo_tone3"],
            "surrogates": "🤵🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_tuxedo_tone4", "tuxedo_tone4"],
            "surrogates": "🤵🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_tuxedo_tone5", "tuxedo_tone5"],
            "surrogates": "🤵🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_in_tuxedo"],
        "surrogates": "🤵‍♀️",
        "unicodeVersion": 13,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_in_tuxedo_tone1", "woman_in_tuxedo_light_skin_tone"],
            "surrogates": "🤵🏻‍♀️",
            "unicodeVersion": 13,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_tuxedo_tone2", "woman_in_tuxedo_medium_light_skin_tone"],
            "surrogates": "🤵🏼‍♀️",
            "unicodeVersion": 13,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_tuxedo_tone3", "woman_in_tuxedo_medium_skin_tone"],
            "surrogates": "🤵🏽‍♀️",
            "unicodeVersion": 13,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_tuxedo_tone4", "woman_in_tuxedo_medium_dark_skin_tone"],
            "surrogates": "🤵🏾‍♀️",
            "unicodeVersion": 13,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_tuxedo_tone5", "woman_in_tuxedo_dark_skin_tone"],
            "surrogates": "🤵🏿‍♀️",
            "unicodeVersion": 13,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_in_tuxedo"],
        "surrogates": "🤵‍♂️",
        "unicodeVersion": 13,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_in_tuxedo_tone1", "man_in_tuxedo_light_skin_tone"],
            "surrogates": "🤵🏻‍♂️",
            "unicodeVersion": 13,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_tuxedo_tone2", "man_in_tuxedo_medium_light_skin_tone"],
            "surrogates": "🤵🏼‍♂️",
            "unicodeVersion": 13,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_tuxedo_tone3", "man_in_tuxedo_medium_skin_tone"],
            "surrogates": "🤵🏽‍♂️",
            "unicodeVersion": 13,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_tuxedo_tone4", "man_in_tuxedo_medium_dark_skin_tone"],
            "surrogates": "🤵🏾‍♂️",
            "unicodeVersion": 13,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_tuxedo_tone5", "man_in_tuxedo_dark_skin_tone"],
            "surrogates": "🤵🏿‍♂️",
            "unicodeVersion": 13,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["princess"],
        "surrogates": "👸",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["princess_tone1"],
            "surrogates": "👸🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["princess_tone2"],
            "surrogates": "👸🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["princess_tone3"],
            "surrogates": "👸🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["princess_tone4"],
            "surrogates": "👸🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["princess_tone5"],
            "surrogates": "👸🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["prince"],
        "surrogates": "🤴",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["prince_tone1"],
            "surrogates": "🤴🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["prince_tone2"],
            "surrogates": "🤴🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["prince_tone3"],
            "surrogates": "🤴🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["prince_tone4"],
            "surrogates": "🤴🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["prince_tone5"],
            "surrogates": "🤴🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["superhero"],
        "surrogates": "🦸",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["superhero_tone1", "superhero_light_skin_tone"],
            "surrogates": "🦸🏻",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["superhero_tone2", "superhero_medium_light_skin_tone"],
            "surrogates": "🦸🏼",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["superhero_tone3", "superhero_medium_skin_tone"],
            "surrogates": "🦸🏽",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["superhero_tone4", "superhero_medium_dark_skin_tone"],
            "surrogates": "🦸🏾",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["superhero_tone5", "superhero_dark_skin_tone"],
            "surrogates": "🦸🏿",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_superhero"],
        "surrogates": "🦸‍♀️",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_superhero_tone1", "woman_superhero_light_skin_tone"],
            "surrogates": "🦸🏻‍♀️",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_superhero_tone2", "woman_superhero_medium_light_skin_tone"],
            "surrogates": "🦸🏼‍♀️",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_superhero_tone3", "woman_superhero_medium_skin_tone"],
            "surrogates": "🦸🏽‍♀️",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_superhero_tone4", "woman_superhero_medium_dark_skin_tone"],
            "surrogates": "🦸🏾‍♀️",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_superhero_tone5", "woman_superhero_dark_skin_tone"],
            "surrogates": "🦸🏿‍♀️",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_superhero"],
        "surrogates": "🦸‍♂️",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_superhero_tone1", "man_superhero_light_skin_tone"],
            "surrogates": "🦸🏻‍♂️",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_superhero_tone2", "man_superhero_medium_light_skin_tone"],
            "surrogates": "🦸🏼‍♂️",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_superhero_tone3", "man_superhero_medium_skin_tone"],
            "surrogates": "🦸🏽‍♂️",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_superhero_tone4", "man_superhero_medium_dark_skin_tone"],
            "surrogates": "🦸🏾‍♂️",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_superhero_tone5", "man_superhero_dark_skin_tone"],
            "surrogates": "🦸🏿‍♂️",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["supervillain"],
        "surrogates": "🦹",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["supervillain_tone1", "supervillain_light_skin_tone"],
            "surrogates": "🦹🏻",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["supervillain_tone2", "supervillain_medium_light_skin_tone"],
            "surrogates": "🦹🏼",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["supervillain_tone3", "supervillain_medium_skin_tone"],
            "surrogates": "🦹🏽",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["supervillain_tone4", "supervillain_medium_dark_skin_tone"],
            "surrogates": "🦹🏾",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["supervillain_tone5", "supervillain_dark_skin_tone"],
            "surrogates": "🦹🏿",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_supervillain"],
        "surrogates": "🦹‍♀️",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_supervillain_tone1", "woman_supervillain_light_skin_tone"],
            "surrogates": "🦹🏻‍♀️",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_supervillain_tone2", "woman_supervillain_medium_light_skin_tone"],
            "surrogates": "🦹🏼‍♀️",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_supervillain_tone3", "woman_supervillain_medium_skin_tone"],
            "surrogates": "🦹🏽‍♀️",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_supervillain_tone4", "woman_supervillain_medium_dark_skin_tone"],
            "surrogates": "🦹🏾‍♀️",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_supervillain_tone5", "woman_supervillain_dark_skin_tone"],
            "surrogates": "🦹🏿‍♀️",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_supervillain"],
        "surrogates": "🦹‍♂️",
        "unicodeVersion": 11,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_supervillain_tone1", "man_supervillain_light_skin_tone"],
            "surrogates": "🦹🏻‍♂️",
            "unicodeVersion": 11,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_supervillain_tone2", "man_supervillain_medium_light_skin_tone"],
            "surrogates": "🦹🏼‍♂️",
            "unicodeVersion": 11,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_supervillain_tone3", "man_supervillain_medium_skin_tone"],
            "surrogates": "🦹🏽‍♂️",
            "unicodeVersion": 11,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_supervillain_tone4", "man_supervillain_medium_dark_skin_tone"],
            "surrogates": "🦹🏾‍♂️",
            "unicodeVersion": 11,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_supervillain_tone5", "man_supervillain_dark_skin_tone"],
            "surrogates": "🦹🏿‍♂️",
            "unicodeVersion": 11,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["ninja"],
        "surrogates": "🥷",
        "unicodeVersion": 13,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["ninja_tone1", "ninja_light_skin_tone"],
            "surrogates": "🥷🏻",
            "unicodeVersion": 13,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["ninja_tone2", "ninja_medium_light_skin_tone"],
            "surrogates": "🥷🏼",
            "unicodeVersion": 13,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["ninja_tone3", "ninja_medium_skin_tone"],
            "surrogates": "🥷🏽",
            "unicodeVersion": 13,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["ninja_tone4", "ninja_medium_dark_skin_tone"],
            "surrogates": "🥷🏾",
            "unicodeVersion": 13,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["ninja_tone5", "ninja_dark_skin_tone"],
            "surrogates": "🥷🏿",
            "unicodeVersion": 13,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["mx_claus"],
        "surrogates": "🧑‍🎄",
        "unicodeVersion": 13,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["mx_claus_tone1", "mx_claus_light_skin_tone"],
            "surrogates": "🧑🏻‍🎄",
            "unicodeVersion": 13,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["mx_claus_tone2", "mx_claus_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🎄",
            "unicodeVersion": 13,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["mx_claus_tone3", "mx_claus_medium_skin_tone"],
            "surrogates": "🧑🏽‍🎄",
            "unicodeVersion": 13,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["mx_claus_tone4", "mx_claus_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🎄",
            "unicodeVersion": 13,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["mx_claus_tone5", "mx_claus_dark_skin_tone"],
            "surrogates": "🧑🏿‍🎄",
            "unicodeVersion": 13,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["mrs_claus", "mother_christmas"],
        "surrogates": "🤶",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["mrs_claus_tone1", "mother_christmas_tone1"],
            "surrogates": "🤶🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["mrs_claus_tone2", "mother_christmas_tone2"],
            "surrogates": "🤶🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["mrs_claus_tone3", "mother_christmas_tone3"],
            "surrogates": "🤶🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["mrs_claus_tone4", "mother_christmas_tone4"],
            "surrogates": "🤶🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["mrs_claus_tone5", "mother_christmas_tone5"],
            "surrogates": "🤶🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["santa"],
        "surrogates": "🎅",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["santa_tone1"],
            "surrogates": "🎅🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["santa_tone2"],
            "surrogates": "🎅🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["santa_tone3"],
            "surrogates": "🎅🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["santa_tone4"],
            "surrogates": "🎅🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["santa_tone5"],
            "surrogates": "🎅🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["mage"],
        "surrogates": "🧙",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["mage_tone1", "mage_light_skin_tone"],
            "surrogates": "🧙🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["mage_tone2", "mage_medium_light_skin_tone"],
            "surrogates": "🧙🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["mage_tone3", "mage_medium_skin_tone"],
            "surrogates": "🧙🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["mage_tone4", "mage_medium_dark_skin_tone"],
            "surrogates": "🧙🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["mage_tone5", "mage_dark_skin_tone"],
            "surrogates": "🧙🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_mage"],
        "surrogates": "🧙‍♀️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_mage_tone1", "woman_mage_light_skin_tone"],
            "surrogates": "🧙🏻‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_mage_tone2", "woman_mage_medium_light_skin_tone"],
            "surrogates": "🧙🏼‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_mage_tone3", "woman_mage_medium_skin_tone"],
            "surrogates": "🧙🏽‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_mage_tone4", "woman_mage_medium_dark_skin_tone"],
            "surrogates": "🧙🏾‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_mage_tone5", "woman_mage_dark_skin_tone"],
            "surrogates": "🧙🏿‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_mage"],
        "surrogates": "🧙‍♂️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_mage_tone1", "man_mage_light_skin_tone"],
            "surrogates": "🧙🏻‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_mage_tone2", "man_mage_medium_light_skin_tone"],
            "surrogates": "🧙🏼‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_mage_tone3", "man_mage_medium_skin_tone"],
            "surrogates": "🧙🏽‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_mage_tone4", "man_mage_medium_dark_skin_tone"],
            "surrogates": "🧙🏾‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_mage_tone5", "man_mage_dark_skin_tone"],
            "surrogates": "🧙🏿‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["elf"],
        "surrogates": "🧝",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["elf_tone1", "elf_light_skin_tone"],
            "surrogates": "🧝🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["elf_tone2", "elf_medium_light_skin_tone"],
            "surrogates": "🧝🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["elf_tone3", "elf_medium_skin_tone"],
            "surrogates": "🧝🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["elf_tone4", "elf_medium_dark_skin_tone"],
            "surrogates": "🧝🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["elf_tone5", "elf_dark_skin_tone"],
            "surrogates": "🧝🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_elf"],
        "surrogates": "🧝‍♀️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_elf_tone1", "woman_elf_light_skin_tone"],
            "surrogates": "🧝🏻‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_elf_tone2", "woman_elf_medium_light_skin_tone"],
            "surrogates": "🧝🏼‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_elf_tone3", "woman_elf_medium_skin_tone"],
            "surrogates": "🧝🏽‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_elf_tone4", "woman_elf_medium_dark_skin_tone"],
            "surrogates": "🧝🏾‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_elf_tone5", "woman_elf_dark_skin_tone"],
            "surrogates": "🧝🏿‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_elf"],
        "surrogates": "🧝‍♂️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_elf_tone1", "man_elf_light_skin_tone"],
            "surrogates": "🧝🏻‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_elf_tone2", "man_elf_medium_light_skin_tone"],
            "surrogates": "🧝🏼‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_elf_tone3", "man_elf_medium_skin_tone"],
            "surrogates": "🧝🏽‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_elf_tone4", "man_elf_medium_dark_skin_tone"],
            "surrogates": "🧝🏾‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_elf_tone5", "man_elf_dark_skin_tone"],
            "surrogates": "🧝🏿‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["vampire"],
        "surrogates": "🧛",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["vampire_tone1", "vampire_light_skin_tone"],
            "surrogates": "🧛🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["vampire_tone2", "vampire_medium_light_skin_tone"],
            "surrogates": "🧛🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["vampire_tone3", "vampire_medium_skin_tone"],
            "surrogates": "🧛🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["vampire_tone4", "vampire_medium_dark_skin_tone"],
            "surrogates": "🧛🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["vampire_tone5", "vampire_dark_skin_tone"],
            "surrogates": "🧛🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_vampire"],
        "surrogates": "🧛‍♀️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_vampire_tone1", "woman_vampire_light_skin_tone"],
            "surrogates": "🧛🏻‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_vampire_tone2", "woman_vampire_medium_light_skin_tone"],
            "surrogates": "🧛🏼‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_vampire_tone3", "woman_vampire_medium_skin_tone"],
            "surrogates": "🧛🏽‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_vampire_tone4", "woman_vampire_medium_dark_skin_tone"],
            "surrogates": "🧛🏾‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_vampire_tone5", "woman_vampire_dark_skin_tone"],
            "surrogates": "🧛🏿‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_vampire"],
        "surrogates": "🧛‍♂️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_vampire_tone1", "man_vampire_light_skin_tone"],
            "surrogates": "🧛🏻‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_vampire_tone2", "man_vampire_medium_light_skin_tone"],
            "surrogates": "🧛🏼‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_vampire_tone3", "man_vampire_medium_skin_tone"],
            "surrogates": "🧛🏽‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_vampire_tone4", "man_vampire_medium_dark_skin_tone"],
            "surrogates": "🧛🏾‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_vampire_tone5", "man_vampire_dark_skin_tone"],
            "surrogates": "🧛🏿‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["zombie"],
        "surrogates": "🧟",
        "unicodeVersion": 10
    }, {
        "names": ["woman_zombie"],
        "surrogates": "🧟‍♀️",
        "unicodeVersion": 10
    }, {
        "names": ["man_zombie"],
        "surrogates": "🧟‍♂️",
        "unicodeVersion": 10
    }, {
        "names": ["genie"],
        "surrogates": "🧞",
        "unicodeVersion": 10
    }, {
        "names": ["woman_genie"],
        "surrogates": "🧞‍♀️",
        "unicodeVersion": 10
    }, {
        "names": ["man_genie"],
        "surrogates": "🧞‍♂️",
        "unicodeVersion": 10
    }, {
        "names": ["merperson"],
        "surrogates": "🧜",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["merperson_tone1", "merperson_light_skin_tone"],
            "surrogates": "🧜🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["merperson_tone2", "merperson_medium_light_skin_tone"],
            "surrogates": "🧜🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["merperson_tone3", "merperson_medium_skin_tone"],
            "surrogates": "🧜🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["merperson_tone4", "merperson_medium_dark_skin_tone"],
            "surrogates": "🧜🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["merperson_tone5", "merperson_dark_skin_tone"],
            "surrogates": "🧜🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["mermaid"],
        "surrogates": "🧜‍♀️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["mermaid_tone1", "mermaid_light_skin_tone"],
            "surrogates": "🧜🏻‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["mermaid_tone2", "mermaid_medium_light_skin_tone"],
            "surrogates": "🧜🏼‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["mermaid_tone3", "mermaid_medium_skin_tone"],
            "surrogates": "🧜🏽‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["mermaid_tone4", "mermaid_medium_dark_skin_tone"],
            "surrogates": "🧜🏾‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["mermaid_tone5", "mermaid_dark_skin_tone"],
            "surrogates": "🧜🏿‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["merman"],
        "surrogates": "🧜‍♂️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["merman_tone1", "merman_light_skin_tone"],
            "surrogates": "🧜🏻‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["merman_tone2", "merman_medium_light_skin_tone"],
            "surrogates": "🧜🏼‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["merman_tone3", "merman_medium_skin_tone"],
            "surrogates": "🧜🏽‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["merman_tone4", "merman_medium_dark_skin_tone"],
            "surrogates": "🧜🏾‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["merman_tone5", "merman_dark_skin_tone"],
            "surrogates": "🧜🏿‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["fairy"],
        "surrogates": "🧚",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["fairy_tone1", "fairy_light_skin_tone"],
            "surrogates": "🧚🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["fairy_tone2", "fairy_medium_light_skin_tone"],
            "surrogates": "🧚🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["fairy_tone3", "fairy_medium_skin_tone"],
            "surrogates": "🧚🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["fairy_tone4", "fairy_medium_dark_skin_tone"],
            "surrogates": "🧚🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["fairy_tone5", "fairy_dark_skin_tone"],
            "surrogates": "🧚🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_fairy"],
        "surrogates": "🧚‍♀️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_fairy_tone1", "woman_fairy_light_skin_tone"],
            "surrogates": "🧚🏻‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_fairy_tone2", "woman_fairy_medium_light_skin_tone"],
            "surrogates": "🧚🏼‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_fairy_tone3", "woman_fairy_medium_skin_tone"],
            "surrogates": "🧚🏽‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_fairy_tone4", "woman_fairy_medium_dark_skin_tone"],
            "surrogates": "🧚🏾‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_fairy_tone5", "woman_fairy_dark_skin_tone"],
            "surrogates": "🧚🏿‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_fairy"],
        "surrogates": "🧚‍♂️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_fairy_tone1", "man_fairy_light_skin_tone"],
            "surrogates": "🧚🏻‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_fairy_tone2", "man_fairy_medium_light_skin_tone"],
            "surrogates": "🧚🏼‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_fairy_tone3", "man_fairy_medium_skin_tone"],
            "surrogates": "🧚🏽‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_fairy_tone4", "man_fairy_medium_dark_skin_tone"],
            "surrogates": "🧚🏾‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_fairy_tone5", "man_fairy_dark_skin_tone"],
            "surrogates": "🧚🏿‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["angel"],
        "surrogates": "👼",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["angel_tone1"],
            "surrogates": "👼🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["angel_tone2"],
            "surrogates": "👼🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["angel_tone3"],
            "surrogates": "👼🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["angel_tone4"],
            "surrogates": "👼🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["angel_tone5"],
            "surrogates": "👼🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["pregnant_woman", "expecting_woman"],
        "surrogates": "🤰",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["pregnant_woman_tone1", "expecting_woman_tone1"],
            "surrogates": "🤰🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["pregnant_woman_tone2", "expecting_woman_tone2"],
            "surrogates": "🤰🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["pregnant_woman_tone3", "expecting_woman_tone3"],
            "surrogates": "🤰🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["pregnant_woman_tone4", "expecting_woman_tone4"],
            "surrogates": "🤰🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["pregnant_woman_tone5", "expecting_woman_tone5"],
            "surrogates": "🤰🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["breast_feeding"],
        "surrogates": "🤱",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["breast_feeding_tone1", "breast_feeding_light_skin_tone"],
            "surrogates": "🤱🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["breast_feeding_tone2", "breast_feeding_medium_light_skin_tone"],
            "surrogates": "🤱🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["breast_feeding_tone3", "breast_feeding_medium_skin_tone"],
            "surrogates": "🤱🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["breast_feeding_tone4", "breast_feeding_medium_dark_skin_tone"],
            "surrogates": "🤱🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["breast_feeding_tone5", "breast_feeding_dark_skin_tone"],
            "surrogates": "🤱🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_feeding_baby"],
        "surrogates": "🧑‍🍼",
        "unicodeVersion": 13,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_feeding_baby_tone1", "person_feeding_baby_light_skin_tone"],
            "surrogates": "🧑🏻‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_feeding_baby_tone2", "person_feeding_baby_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_feeding_baby_tone3", "person_feeding_baby_medium_skin_tone"],
            "surrogates": "🧑🏽‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_feeding_baby_tone4", "person_feeding_baby_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_feeding_baby_tone5", "person_feeding_baby_dark_skin_tone"],
            "surrogates": "🧑🏿‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_feeding_baby"],
        "surrogates": "👩‍🍼",
        "unicodeVersion": 13,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_feeding_baby_tone1", "woman_feeding_baby_light_skin_tone"],
            "surrogates": "👩🏻‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_feeding_baby_tone2", "woman_feeding_baby_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_feeding_baby_tone3", "woman_feeding_baby_medium_skin_tone"],
            "surrogates": "👩🏽‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_feeding_baby_tone4", "woman_feeding_baby_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_feeding_baby_tone5", "woman_feeding_baby_dark_skin_tone"],
            "surrogates": "👩🏿‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_feeding_baby"],
        "surrogates": "👨‍🍼",
        "unicodeVersion": 13,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_feeding_baby_tone1", "man_feeding_baby_light_skin_tone"],
            "surrogates": "👨🏻‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_feeding_baby_tone2", "man_feeding_baby_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_feeding_baby_tone3", "man_feeding_baby_medium_skin_tone"],
            "surrogates": "👨🏽‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_feeding_baby_tone4", "man_feeding_baby_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_feeding_baby_tone5", "man_feeding_baby_dark_skin_tone"],
            "surrogates": "👨🏿‍🍼",
            "unicodeVersion": 13,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_bowing", "bow"],
        "surrogates": "🙇",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_bowing_tone1", "bow_tone1"],
            "surrogates": "🙇🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_bowing_tone2", "bow_tone2"],
            "surrogates": "🙇🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_bowing_tone3", "bow_tone3"],
            "surrogates": "🙇🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_bowing_tone4", "bow_tone4"],
            "surrogates": "🙇🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_bowing_tone5", "bow_tone5"],
            "surrogates": "🙇🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_bowing"],
        "surrogates": "🙇‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_bowing_tone1", "woman_bowing_light_skin_tone"],
            "surrogates": "🙇🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_bowing_tone2", "woman_bowing_medium_light_skin_tone"],
            "surrogates": "🙇🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_bowing_tone3", "woman_bowing_medium_skin_tone"],
            "surrogates": "🙇🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_bowing_tone4", "woman_bowing_medium_dark_skin_tone"],
            "surrogates": "🙇🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_bowing_tone5", "woman_bowing_dark_skin_tone"],
            "surrogates": "🙇🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_bowing"],
        "surrogates": "🙇‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_bowing_tone1", "man_bowing_light_skin_tone"],
            "surrogates": "🙇🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_bowing_tone2", "man_bowing_medium_light_skin_tone"],
            "surrogates": "🙇🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_bowing_tone3", "man_bowing_medium_skin_tone"],
            "surrogates": "🙇🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_bowing_tone4", "man_bowing_medium_dark_skin_tone"],
            "surrogates": "🙇🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_bowing_tone5", "man_bowing_dark_skin_tone"],
            "surrogates": "🙇🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_tipping_hand", "information_desk_person"],
        "surrogates": "💁",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_tipping_hand_tone1", "information_desk_person_tone1"],
            "surrogates": "💁🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tipping_hand_tone2", "information_desk_person_tone2"],
            "surrogates": "💁🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tipping_hand_tone3", "information_desk_person_tone3"],
            "surrogates": "💁🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tipping_hand_tone4", "information_desk_person_tone4"],
            "surrogates": "💁🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_tipping_hand_tone5", "information_desk_person_tone5"],
            "surrogates": "💁🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_tipping_hand"],
        "surrogates": "💁‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_tipping_hand_tone1", "woman_tipping_hand_light_skin_tone"],
            "surrogates": "💁🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_tipping_hand_tone2", "woman_tipping_hand_medium_light_skin_tone"],
            "surrogates": "💁🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_tipping_hand_tone3", "woman_tipping_hand_medium_skin_tone"],
            "surrogates": "💁🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_tipping_hand_tone4", "woman_tipping_hand_medium_dark_skin_tone"],
            "surrogates": "💁🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_tipping_hand_tone5", "woman_tipping_hand_dark_skin_tone"],
            "surrogates": "💁🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_tipping_hand"],
        "surrogates": "💁‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_tipping_hand_tone1", "man_tipping_hand_light_skin_tone"],
            "surrogates": "💁🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_tipping_hand_tone2", "man_tipping_hand_medium_light_skin_tone"],
            "surrogates": "💁🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_tipping_hand_tone3", "man_tipping_hand_medium_skin_tone"],
            "surrogates": "💁🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_tipping_hand_tone4", "man_tipping_hand_medium_dark_skin_tone"],
            "surrogates": "💁🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_tipping_hand_tone5", "man_tipping_hand_dark_skin_tone"],
            "surrogates": "💁🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_gesturing_no", "no_good"],
        "surrogates": "🙅",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_gesturing_no_tone1", "no_good_tone1"],
            "surrogates": "🙅🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_gesturing_no_tone2", "no_good_tone2"],
            "surrogates": "🙅🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_gesturing_no_tone3", "no_good_tone3"],
            "surrogates": "🙅🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_gesturing_no_tone4", "no_good_tone4"],
            "surrogates": "🙅🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_gesturing_no_tone5", "no_good_tone5"],
            "surrogates": "🙅🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_gesturing_no"],
        "surrogates": "🙅‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_gesturing_no_tone1", "woman_gesturing_no_light_skin_tone"],
            "surrogates": "🙅🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_gesturing_no_tone2", "woman_gesturing_no_medium_light_skin_tone"],
            "surrogates": "🙅🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_gesturing_no_tone3", "woman_gesturing_no_medium_skin_tone"],
            "surrogates": "🙅🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_gesturing_no_tone4", "woman_gesturing_no_medium_dark_skin_tone"],
            "surrogates": "🙅🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_gesturing_no_tone5", "woman_gesturing_no_dark_skin_tone"],
            "surrogates": "🙅🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_gesturing_no"],
        "surrogates": "🙅‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_gesturing_no_tone1", "man_gesturing_no_light_skin_tone"],
            "surrogates": "🙅🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_gesturing_no_tone2", "man_gesturing_no_medium_light_skin_tone"],
            "surrogates": "🙅🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_gesturing_no_tone3", "man_gesturing_no_medium_skin_tone"],
            "surrogates": "🙅🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_gesturing_no_tone4", "man_gesturing_no_medium_dark_skin_tone"],
            "surrogates": "🙅🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_gesturing_no_tone5", "man_gesturing_no_dark_skin_tone"],
            "surrogates": "🙅🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_gesturing_ok", "ok_woman"],
        "surrogates": "🙆",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_gesturing_ok_tone1", "ok_woman_tone1"],
            "surrogates": "🙆🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_gesturing_ok_tone2", "ok_woman_tone2"],
            "surrogates": "🙆🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_gesturing_ok_tone3", "ok_woman_tone3"],
            "surrogates": "🙆🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_gesturing_ok_tone4", "ok_woman_tone4"],
            "surrogates": "🙆🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_gesturing_ok_tone5", "ok_woman_tone5"],
            "surrogates": "🙆🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_gesturing_ok"],
        "surrogates": "🙆‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_gesturing_ok_tone1", "woman_gesturing_ok_light_skin_tone"],
            "surrogates": "🙆🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_gesturing_ok_tone2", "woman_gesturing_ok_medium_light_skin_tone"],
            "surrogates": "🙆🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_gesturing_ok_tone3", "woman_gesturing_ok_medium_skin_tone"],
            "surrogates": "🙆🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_gesturing_ok_tone4", "woman_gesturing_ok_medium_dark_skin_tone"],
            "surrogates": "🙆🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_gesturing_ok_tone5", "woman_gesturing_ok_dark_skin_tone"],
            "surrogates": "🙆🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_gesturing_ok"],
        "surrogates": "🙆‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_gesturing_ok_tone1", "man_gesturing_ok_light_skin_tone"],
            "surrogates": "🙆🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_gesturing_ok_tone2", "man_gesturing_ok_medium_light_skin_tone"],
            "surrogates": "🙆🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_gesturing_ok_tone3", "man_gesturing_ok_medium_skin_tone"],
            "surrogates": "🙆🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_gesturing_ok_tone4", "man_gesturing_ok_medium_dark_skin_tone"],
            "surrogates": "🙆🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_gesturing_ok_tone5", "man_gesturing_ok_dark_skin_tone"],
            "surrogates": "🙆🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_raising_hand", "raising_hand"],
        "surrogates": "🙋",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_raising_hand_tone1", "raising_hand_tone1"],
            "surrogates": "🙋🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_raising_hand_tone2", "raising_hand_tone2"],
            "surrogates": "🙋🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_raising_hand_tone3", "raising_hand_tone3"],
            "surrogates": "🙋🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_raising_hand_tone4", "raising_hand_tone4"],
            "surrogates": "🙋🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_raising_hand_tone5", "raising_hand_tone5"],
            "surrogates": "🙋🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_raising_hand"],
        "surrogates": "🙋‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_raising_hand_tone1", "woman_raising_hand_light_skin_tone"],
            "surrogates": "🙋🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_raising_hand_tone2", "woman_raising_hand_medium_light_skin_tone"],
            "surrogates": "🙋🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_raising_hand_tone3", "woman_raising_hand_medium_skin_tone"],
            "surrogates": "🙋🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_raising_hand_tone4", "woman_raising_hand_medium_dark_skin_tone"],
            "surrogates": "🙋🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_raising_hand_tone5", "woman_raising_hand_dark_skin_tone"],
            "surrogates": "🙋🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_raising_hand"],
        "surrogates": "🙋‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_raising_hand_tone1", "man_raising_hand_light_skin_tone"],
            "surrogates": "🙋🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_raising_hand_tone2", "man_raising_hand_medium_light_skin_tone"],
            "surrogates": "🙋🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_raising_hand_tone3", "man_raising_hand_medium_skin_tone"],
            "surrogates": "🙋🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_raising_hand_tone4", "man_raising_hand_medium_dark_skin_tone"],
            "surrogates": "🙋🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_raising_hand_tone5", "man_raising_hand_dark_skin_tone"],
            "surrogates": "🙋🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["deaf_person"],
        "surrogates": "🧏",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["deaf_person_tone1", "deaf_person_light_skin_tone"],
            "surrogates": "🧏🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["deaf_person_tone2", "deaf_person_medium_light_skin_tone"],
            "surrogates": "🧏🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["deaf_person_tone3", "deaf_person_medium_skin_tone"],
            "surrogates": "🧏🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["deaf_person_tone4", "deaf_person_medium_dark_skin_tone"],
            "surrogates": "🧏🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["deaf_person_tone5", "deaf_person_dark_skin_tone"],
            "surrogates": "🧏🏿",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["deaf_woman"],
        "surrogates": "🧏‍♀️",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["deaf_woman_tone1", "deaf_woman_light_skin_tone"],
            "surrogates": "🧏🏻‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["deaf_woman_tone2", "deaf_woman_medium_light_skin_tone"],
            "surrogates": "🧏🏼‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["deaf_woman_tone3", "deaf_woman_medium_skin_tone"],
            "surrogates": "🧏🏽‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["deaf_woman_tone4", "deaf_woman_medium_dark_skin_tone"],
            "surrogates": "🧏🏾‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["deaf_woman_tone5", "deaf_woman_dark_skin_tone"],
            "surrogates": "🧏🏿‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["deaf_man"],
        "surrogates": "🧏‍♂️",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["deaf_man_tone1", "deaf_man_light_skin_tone"],
            "surrogates": "🧏🏻‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["deaf_man_tone2", "deaf_man_medium_light_skin_tone"],
            "surrogates": "🧏🏼‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["deaf_man_tone3", "deaf_man_medium_skin_tone"],
            "surrogates": "🧏🏽‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["deaf_man_tone4", "deaf_man_medium_dark_skin_tone"],
            "surrogates": "🧏🏾‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["deaf_man_tone5", "deaf_man_dark_skin_tone"],
            "surrogates": "🧏🏿‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_facepalming", "face_palm", "facepalm"],
        "surrogates": "🤦",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_facepalming_tone1", "face_palm_tone1", "facepalm_tone1"],
            "surrogates": "🤦🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_facepalming_tone2", "face_palm_tone2", "facepalm_tone2"],
            "surrogates": "🤦🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_facepalming_tone3", "face_palm_tone3", "facepalm_tone3"],
            "surrogates": "🤦🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_facepalming_tone4", "face_palm_tone4", "facepalm_tone4"],
            "surrogates": "🤦🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_facepalming_tone5", "face_palm_tone5", "facepalm_tone5"],
            "surrogates": "🤦🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_facepalming"],
        "surrogates": "🤦‍♀️",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_facepalming_tone1", "woman_facepalming_light_skin_tone"],
            "surrogates": "🤦🏻‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_facepalming_tone2", "woman_facepalming_medium_light_skin_tone"],
            "surrogates": "🤦🏼‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_facepalming_tone3", "woman_facepalming_medium_skin_tone"],
            "surrogates": "🤦🏽‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_facepalming_tone4", "woman_facepalming_medium_dark_skin_tone"],
            "surrogates": "🤦🏾‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_facepalming_tone5", "woman_facepalming_dark_skin_tone"],
            "surrogates": "🤦🏿‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_facepalming"],
        "surrogates": "🤦‍♂️",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_facepalming_tone1", "man_facepalming_light_skin_tone"],
            "surrogates": "🤦🏻‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_facepalming_tone2", "man_facepalming_medium_light_skin_tone"],
            "surrogates": "🤦🏼‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_facepalming_tone3", "man_facepalming_medium_skin_tone"],
            "surrogates": "🤦🏽‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_facepalming_tone4", "man_facepalming_medium_dark_skin_tone"],
            "surrogates": "🤦🏾‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_facepalming_tone5", "man_facepalming_dark_skin_tone"],
            "surrogates": "🤦🏿‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_shrugging", "shrug"],
        "surrogates": "🤷",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_shrugging_tone1", "shrug_tone1"],
            "surrogates": "🤷🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_shrugging_tone2", "shrug_tone2"],
            "surrogates": "🤷🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_shrugging_tone3", "shrug_tone3"],
            "surrogates": "🤷🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_shrugging_tone4", "shrug_tone4"],
            "surrogates": "🤷🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_shrugging_tone5", "shrug_tone5"],
            "surrogates": "🤷🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_shrugging"],
        "surrogates": "🤷‍♀️",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_shrugging_tone1", "woman_shrugging_light_skin_tone"],
            "surrogates": "🤷🏻‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_shrugging_tone2", "woman_shrugging_medium_light_skin_tone"],
            "surrogates": "🤷🏼‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_shrugging_tone3", "woman_shrugging_medium_skin_tone"],
            "surrogates": "🤷🏽‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_shrugging_tone4", "woman_shrugging_medium_dark_skin_tone"],
            "surrogates": "🤷🏾‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_shrugging_tone5", "woman_shrugging_dark_skin_tone"],
            "surrogates": "🤷🏿‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_shrugging"],
        "surrogates": "🤷‍♂️",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_shrugging_tone1", "man_shrugging_light_skin_tone"],
            "surrogates": "🤷🏻‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_shrugging_tone2", "man_shrugging_medium_light_skin_tone"],
            "surrogates": "🤷🏼‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_shrugging_tone3", "man_shrugging_medium_skin_tone"],
            "surrogates": "🤷🏽‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_shrugging_tone4", "man_shrugging_medium_dark_skin_tone"],
            "surrogates": "🤷🏾‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_shrugging_tone5", "man_shrugging_dark_skin_tone"],
            "surrogates": "🤷🏿‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_pouting", "person_with_pouting_face"],
        "surrogates": "🙎",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_pouting_tone1", "person_with_pouting_face_tone1"],
            "surrogates": "🙎🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_pouting_tone2", "person_with_pouting_face_tone2"],
            "surrogates": "🙎🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_pouting_tone3", "person_with_pouting_face_tone3"],
            "surrogates": "🙎🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_pouting_tone4", "person_with_pouting_face_tone4"],
            "surrogates": "🙎🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_pouting_tone5", "person_with_pouting_face_tone5"],
            "surrogates": "🙎🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_pouting"],
        "surrogates": "🙎‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_pouting_tone1", "woman_pouting_light_skin_tone"],
            "surrogates": "🙎🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_pouting_tone2", "woman_pouting_medium_light_skin_tone"],
            "surrogates": "🙎🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_pouting_tone3", "woman_pouting_medium_skin_tone"],
            "surrogates": "🙎🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_pouting_tone4", "woman_pouting_medium_dark_skin_tone"],
            "surrogates": "🙎🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_pouting_tone5", "woman_pouting_dark_skin_tone"],
            "surrogates": "🙎🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_pouting"],
        "surrogates": "🙎‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_pouting_tone1", "man_pouting_light_skin_tone"],
            "surrogates": "🙎🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_pouting_tone2", "man_pouting_medium_light_skin_tone"],
            "surrogates": "🙎🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_pouting_tone3", "man_pouting_medium_skin_tone"],
            "surrogates": "🙎🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_pouting_tone4", "man_pouting_medium_dark_skin_tone"],
            "surrogates": "🙎🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_pouting_tone5", "man_pouting_dark_skin_tone"],
            "surrogates": "🙎🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_frowning"],
        "surrogates": "🙍",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_frowning_tone1"],
            "surrogates": "🙍🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_frowning_tone2"],
            "surrogates": "🙍🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_frowning_tone3"],
            "surrogates": "🙍🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_frowning_tone4"],
            "surrogates": "🙍🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_frowning_tone5"],
            "surrogates": "🙍🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_frowning"],
        "surrogates": "🙍‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_frowning_tone1", "woman_frowning_light_skin_tone"],
            "surrogates": "🙍🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_frowning_tone2", "woman_frowning_medium_light_skin_tone"],
            "surrogates": "🙍🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_frowning_tone3", "woman_frowning_medium_skin_tone"],
            "surrogates": "🙍🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_frowning_tone4", "woman_frowning_medium_dark_skin_tone"],
            "surrogates": "🙍🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_frowning_tone5", "woman_frowning_dark_skin_tone"],
            "surrogates": "🙍🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_frowning"],
        "surrogates": "🙍‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_frowning_tone1", "man_frowning_light_skin_tone"],
            "surrogates": "🙍🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_frowning_tone2", "man_frowning_medium_light_skin_tone"],
            "surrogates": "🙍🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_frowning_tone3", "man_frowning_medium_skin_tone"],
            "surrogates": "🙍🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_frowning_tone4", "man_frowning_medium_dark_skin_tone"],
            "surrogates": "🙍🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_frowning_tone5", "man_frowning_dark_skin_tone"],
            "surrogates": "🙍🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_getting_haircut", "haircut"],
        "surrogates": "💇",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_getting_haircut_tone1", "haircut_tone1"],
            "surrogates": "💇🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_getting_haircut_tone2", "haircut_tone2"],
            "surrogates": "💇🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_getting_haircut_tone3", "haircut_tone3"],
            "surrogates": "💇🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_getting_haircut_tone4", "haircut_tone4"],
            "surrogates": "💇🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_getting_haircut_tone5", "haircut_tone5"],
            "surrogates": "💇🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_getting_haircut"],
        "surrogates": "💇‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_getting_haircut_tone1", "woman_getting_haircut_light_skin_tone"],
            "surrogates": "💇🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_getting_haircut_tone2", "woman_getting_haircut_medium_light_skin_tone"],
            "surrogates": "💇🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_getting_haircut_tone3", "woman_getting_haircut_medium_skin_tone"],
            "surrogates": "💇🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_getting_haircut_tone4", "woman_getting_haircut_medium_dark_skin_tone"],
            "surrogates": "💇🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_getting_haircut_tone5", "woman_getting_haircut_dark_skin_tone"],
            "surrogates": "💇🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_getting_haircut"],
        "surrogates": "💇‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_getting_haircut_tone1", "man_getting_haircut_light_skin_tone"],
            "surrogates": "💇🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_getting_haircut_tone2", "man_getting_haircut_medium_light_skin_tone"],
            "surrogates": "💇🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_getting_haircut_tone3", "man_getting_haircut_medium_skin_tone"],
            "surrogates": "💇🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_getting_haircut_tone4", "man_getting_haircut_medium_dark_skin_tone"],
            "surrogates": "💇🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_getting_haircut_tone5", "man_getting_haircut_dark_skin_tone"],
            "surrogates": "💇🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_getting_massage", "massage"],
        "surrogates": "💆",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_getting_massage_tone1", "massage_tone1"],
            "surrogates": "💆🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_getting_massage_tone2", "massage_tone2"],
            "surrogates": "💆🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_getting_massage_tone3", "massage_tone3"],
            "surrogates": "💆🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_getting_massage_tone4", "massage_tone4"],
            "surrogates": "💆🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_getting_massage_tone5", "massage_tone5"],
            "surrogates": "💆🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_getting_face_massage"],
        "surrogates": "💆‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_getting_face_massage_tone1", "woman_getting_face_massage_light_skin_tone"],
            "surrogates": "💆🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_getting_face_massage_tone2", "woman_getting_face_massage_medium_light_skin_tone"],
            "surrogates": "💆🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_getting_face_massage_tone3", "woman_getting_face_massage_medium_skin_tone"],
            "surrogates": "💆🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_getting_face_massage_tone4", "woman_getting_face_massage_medium_dark_skin_tone"],
            "surrogates": "💆🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_getting_face_massage_tone5", "woman_getting_face_massage_dark_skin_tone"],
            "surrogates": "💆🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_getting_face_massage"],
        "surrogates": "💆‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_getting_face_massage_tone1", "man_getting_face_massage_light_skin_tone"],
            "surrogates": "💆🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_getting_face_massage_tone2", "man_getting_face_massage_medium_light_skin_tone"],
            "surrogates": "💆🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_getting_face_massage_tone3", "man_getting_face_massage_medium_skin_tone"],
            "surrogates": "💆🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_getting_face_massage_tone4", "man_getting_face_massage_medium_dark_skin_tone"],
            "surrogates": "💆🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_getting_face_massage_tone5", "man_getting_face_massage_dark_skin_tone"],
            "surrogates": "💆🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_in_steamy_room"],
        "surrogates": "🧖",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_in_steamy_room_tone1", "person_in_steamy_room_light_skin_tone"],
            "surrogates": "🧖🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_steamy_room_tone2", "person_in_steamy_room_medium_light_skin_tone"],
            "surrogates": "🧖🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_steamy_room_tone3", "person_in_steamy_room_medium_skin_tone"],
            "surrogates": "🧖🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_steamy_room_tone4", "person_in_steamy_room_medium_dark_skin_tone"],
            "surrogates": "🧖🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_steamy_room_tone5", "person_in_steamy_room_dark_skin_tone"],
            "surrogates": "🧖🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_in_steamy_room"],
        "surrogates": "🧖‍♀️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_in_steamy_room_tone1", "woman_in_steamy_room_light_skin_tone"],
            "surrogates": "🧖🏻‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_steamy_room_tone2", "woman_in_steamy_room_medium_light_skin_tone"],
            "surrogates": "🧖🏼‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_steamy_room_tone3", "woman_in_steamy_room_medium_skin_tone"],
            "surrogates": "🧖🏽‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_steamy_room_tone4", "woman_in_steamy_room_medium_dark_skin_tone"],
            "surrogates": "🧖🏾‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_steamy_room_tone5", "woman_in_steamy_room_dark_skin_tone"],
            "surrogates": "🧖🏿‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_in_steamy_room"],
        "surrogates": "🧖‍♂️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_in_steamy_room_tone1", "man_in_steamy_room_light_skin_tone"],
            "surrogates": "🧖🏻‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_steamy_room_tone2", "man_in_steamy_room_medium_light_skin_tone"],
            "surrogates": "🧖🏼‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_steamy_room_tone3", "man_in_steamy_room_medium_skin_tone"],
            "surrogates": "🧖🏽‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_steamy_room_tone4", "man_in_steamy_room_medium_dark_skin_tone"],
            "surrogates": "🧖🏾‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_steamy_room_tone5", "man_in_steamy_room_dark_skin_tone"],
            "surrogates": "🧖🏿‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["nail_care"],
        "surrogates": "💅",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["nail_care_tone1"],
            "surrogates": "💅🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["nail_care_tone2"],
            "surrogates": "💅🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["nail_care_tone3"],
            "surrogates": "💅🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["nail_care_tone4"],
            "surrogates": "💅🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["nail_care_tone5"],
            "surrogates": "💅🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["selfie"],
        "surrogates": "🤳",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["selfie_tone1"],
            "surrogates": "🤳🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["selfie_tone2"],
            "surrogates": "🤳🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["selfie_tone3"],
            "surrogates": "🤳🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["selfie_tone4"],
            "surrogates": "🤳🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["selfie_tone5"],
            "surrogates": "🤳🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["dancer"],
        "surrogates": "💃",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["dancer_tone1"],
            "surrogates": "💃🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["dancer_tone2"],
            "surrogates": "💃🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["dancer_tone3"],
            "surrogates": "💃🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["dancer_tone4"],
            "surrogates": "💃🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["dancer_tone5"],
            "surrogates": "💃🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_dancing", "male_dancer"],
        "surrogates": "🕺",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_dancing_tone1", "male_dancer_tone1"],
            "surrogates": "🕺🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_dancing_tone2", "male_dancer_tone2"],
            "surrogates": "🕺🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_dancing_tone3", "male_dancer_tone3"],
            "surrogates": "🕺🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_dancing_tone5", "male_dancer_tone5"],
            "surrogates": "🕺🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }, {
            "names": ["man_dancing_tone4", "male_dancer_tone4"],
            "surrogates": "🕺🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["people_with_bunny_ears_partying", "dancers"],
        "surrogates": "👯",
        "unicodeVersion": 6
    }, {
        "names": ["women_with_bunny_ears_partying"],
        "surrogates": "👯‍♀️",
        "unicodeVersion": 6
    }, {
        "names": ["men_with_bunny_ears_partying"],
        "surrogates": "👯‍♂️",
        "unicodeVersion": 6
    }, {
        "names": ["levitate", "man_in_business_suit_levitating"],
        "surrogates": "🕴️",
        "unicodeVersion": 7,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["levitate_tone1", "man_in_business_suit_levitating_tone1", "man_in_business_suit_levitating_light_skin_tone"],
            "surrogates": "🕴🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["levitate_tone2", "man_in_business_suit_levitating_tone2", "man_in_business_suit_levitating_medium_light_skin_tone"],
            "surrogates": "🕴🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["levitate_tone3", "man_in_business_suit_levitating_tone3", "man_in_business_suit_levitating_medium_skin_tone"],
            "surrogates": "🕴🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["levitate_tone4", "man_in_business_suit_levitating_tone4", "man_in_business_suit_levitating_medium_dark_skin_tone"],
            "surrogates": "🕴🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["levitate_tone5", "man_in_business_suit_levitating_tone5", "man_in_business_suit_levitating_dark_skin_tone"],
            "surrogates": "🕴🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_in_manual_wheelchair"],
        "surrogates": "🧑‍🦽",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_in_manual_wheelchair_tone1", "person_in_manual_wheelchair_light_skin_tone"],
            "surrogates": "🧑🏻‍🦽",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_manual_wheelchair_tone2", "person_in_manual_wheelchair_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🦽",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_manual_wheelchair_tone3", "person_in_manual_wheelchair_medium_skin_tone"],
            "surrogates": "🧑🏽‍🦽",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_manual_wheelchair_tone4", "person_in_manual_wheelchair_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🦽",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_manual_wheelchair_tone5", "person_in_manual_wheelchair_dark_skin_tone"],
            "surrogates": "🧑🏿‍🦽",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_in_manual_wheelchair"],
        "surrogates": "👩‍🦽",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_in_manual_wheelchair_tone1", "woman_in_manual_wheelchair_light_skin_tone"],
            "surrogates": "👩🏻‍🦽",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_manual_wheelchair_tone2", "woman_in_manual_wheelchair_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🦽",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_manual_wheelchair_tone3", "woman_in_manual_wheelchair_medium_skin_tone"],
            "surrogates": "👩🏽‍🦽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_manual_wheelchair_tone4", "woman_in_manual_wheelchair_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🦽",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_manual_wheelchair_tone5", "woman_in_manual_wheelchair_dark_skin_tone"],
            "surrogates": "👩🏿‍🦽",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_in_manual_wheelchair"],
        "surrogates": "👨‍🦽",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_in_manual_wheelchair_tone1", "man_in_manual_wheelchair_light_skin_tone"],
            "surrogates": "👨🏻‍🦽",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_manual_wheelchair_tone2", "man_in_manual_wheelchair_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🦽",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_manual_wheelchair_tone3", "man_in_manual_wheelchair_medium_skin_tone"],
            "surrogates": "👨🏽‍🦽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_manual_wheelchair_tone4", "man_in_manual_wheelchair_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🦽",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_manual_wheelchair_tone5", "man_in_manual_wheelchair_dark_skin_tone"],
            "surrogates": "👨🏿‍🦽",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_in_motorized_wheelchair"],
        "surrogates": "🧑‍🦼",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_in_motorized_wheelchair_tone1", "person_in_motorized_wheelchair_light_skin_tone"],
            "surrogates": "🧑🏻‍🦼",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_motorized_wheelchair_tone2", "person_in_motorized_wheelchair_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🦼",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_motorized_wheelchair_tone3", "person_in_motorized_wheelchair_medium_skin_tone"],
            "surrogates": "🧑🏽‍🦼",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_motorized_wheelchair_tone4", "person_in_motorized_wheelchair_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🦼",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_motorized_wheelchair_tone5", "person_in_motorized_wheelchair_dark_skin_tone"],
            "surrogates": "🧑🏿‍🦼",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_in_motorized_wheelchair"],
        "surrogates": "👩‍🦼",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_in_motorized_wheelchair_tone1", "woman_in_motorized_wheelchair_light_skin_tone"],
            "surrogates": "👩🏻‍🦼",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_motorized_wheelchair_tone2", "woman_in_motorized_wheelchair_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🦼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_motorized_wheelchair_tone3", "woman_in_motorized_wheelchair_medium_skin_tone"],
            "surrogates": "👩🏽‍🦼",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_motorized_wheelchair_tone4", "woman_in_motorized_wheelchair_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🦼",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_motorized_wheelchair_tone5", "woman_in_motorized_wheelchair_dark_skin_tone"],
            "surrogates": "👩🏿‍🦼",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_in_motorized_wheelchair"],
        "surrogates": "👨‍🦼",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_in_motorized_wheelchair_tone1", "man_in_motorized_wheelchair_light_skin_tone"],
            "surrogates": "👨🏻‍🦼",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_motorized_wheelchair_tone2", "man_in_motorized_wheelchair_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🦼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_motorized_wheelchair_tone3", "man_in_motorized_wheelchair_medium_skin_tone"],
            "surrogates": "👨🏽‍🦼",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_motorized_wheelchair_tone4", "man_in_motorized_wheelchair_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🦼",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_motorized_wheelchair_tone5", "man_in_motorized_wheelchair_dark_skin_tone"],
            "surrogates": "👨🏿‍🦼",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_walking", "walking"],
        "surrogates": "🚶",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_walking_tone1", "walking_tone1"],
            "surrogates": "🚶🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_walking_tone2", "walking_tone2"],
            "surrogates": "🚶🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_walking_tone3", "walking_tone3"],
            "surrogates": "🚶🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_walking_tone4", "walking_tone4"],
            "surrogates": "🚶🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_walking_tone5", "walking_tone5"],
            "surrogates": "🚶🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_walking"],
        "surrogates": "🚶‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_walking_tone1", "woman_walking_light_skin_tone"],
            "surrogates": "🚶🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_walking_tone2", "woman_walking_medium_light_skin_tone"],
            "surrogates": "🚶🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_walking_tone3", "woman_walking_medium_skin_tone"],
            "surrogates": "🚶🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_walking_tone4", "woman_walking_medium_dark_skin_tone"],
            "surrogates": "🚶🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_walking_tone5", "woman_walking_dark_skin_tone"],
            "surrogates": "🚶🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_walking"],
        "surrogates": "🚶‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_walking_tone1", "man_walking_light_skin_tone"],
            "surrogates": "🚶🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_walking_tone2", "man_walking_medium_light_skin_tone"],
            "surrogates": "🚶🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_walking_tone3", "man_walking_medium_skin_tone"],
            "surrogates": "🚶🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_walking_tone4", "man_walking_medium_dark_skin_tone"],
            "surrogates": "🚶🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_walking_tone5", "man_walking_dark_skin_tone"],
            "surrogates": "🚶🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_with_probing_cane"],
        "surrogates": "🧑‍🦯",
        "unicodeVersion": 12.1,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_with_probing_cane_tone1", "person_with_probing_cane_light_skin_tone"],
            "surrogates": "🧑🏻‍🦯",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_with_probing_cane_tone2", "person_with_probing_cane_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🦯",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_with_probing_cane_tone3", "person_with_probing_cane_medium_skin_tone"],
            "surrogates": "🧑🏽‍🦯",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_with_probing_cane_tone4", "person_with_probing_cane_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🦯",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_with_probing_cane_tone5", "person_with_probing_cane_dark_skin_tone"],
            "surrogates": "🧑🏿‍🦯",
            "unicodeVersion": 12.1,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_with_probing_cane"],
        "surrogates": "👩‍🦯",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_with_probing_cane_tone1", "woman_with_probing_cane_light_skin_tone"],
            "surrogates": "👩🏻‍🦯",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_with_probing_cane_tone2", "woman_with_probing_cane_medium_light_skin_tone"],
            "surrogates": "👩🏼‍🦯",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_with_probing_cane_tone3", "woman_with_probing_cane_medium_skin_tone"],
            "surrogates": "👩🏽‍🦯",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_with_probing_cane_tone4", "woman_with_probing_cane_medium_dark_skin_tone"],
            "surrogates": "👩🏾‍🦯",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_with_probing_cane_tone5", "woman_with_probing_cane_dark_skin_tone"],
            "surrogates": "👩🏿‍🦯",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_with_probing_cane"],
        "surrogates": "👨‍🦯",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_with_probing_cane_tone1", "man_with_probing_cane_light_skin_tone"],
            "surrogates": "👨🏻‍🦯",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_with_probing_cane_tone3", "man_with_probing_cane_medium_skin_tone"],
            "surrogates": "👨🏽‍🦯",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_with_probing_cane_tone2", "man_with_probing_cane_medium_light_skin_tone"],
            "surrogates": "👨🏼‍🦯",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_with_probing_cane_tone4", "man_with_probing_cane_medium_dark_skin_tone"],
            "surrogates": "👨🏾‍🦯",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_with_probing_cane_tone5", "man_with_probing_cane_dark_skin_tone"],
            "surrogates": "👨🏿‍🦯",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_kneeling"],
        "surrogates": "🧎",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_kneeling_tone1", "person_kneeling_light_skin_tone"],
            "surrogates": "🧎🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_kneeling_tone2", "person_kneeling_medium_light_skin_tone"],
            "surrogates": "🧎🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_kneeling_tone3", "person_kneeling_medium_skin_tone"],
            "surrogates": "🧎🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_kneeling_tone4", "person_kneeling_medium_dark_skin_tone"],
            "surrogates": "🧎🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_kneeling_tone5", "person_kneeling_dark_skin_tone"],
            "surrogates": "🧎🏿",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_kneeling"],
        "surrogates": "🧎‍♀️",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_kneeling_tone1", "woman_kneeling_light_skin_tone"],
            "surrogates": "🧎🏻‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_kneeling_tone2", "woman_kneeling_medium_light_skin_tone"],
            "surrogates": "🧎🏼‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_kneeling_tone3", "woman_kneeling_medium_skin_tone"],
            "surrogates": "🧎🏽‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_kneeling_tone4", "woman_kneeling_medium_dark_skin_tone"],
            "surrogates": "🧎🏾‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_kneeling_tone5", "woman_kneeling_dark_skin_tone"],
            "surrogates": "🧎🏿‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_kneeling"],
        "surrogates": "🧎‍♂️",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_kneeling_tone1", "man_kneeling_light_skin_tone"],
            "surrogates": "🧎🏻‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_kneeling_tone2", "man_kneeling_medium_light_skin_tone"],
            "surrogates": "🧎🏼‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_kneeling_tone3", "man_kneeling_medium_skin_tone"],
            "surrogates": "🧎🏽‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_kneeling_tone4", "man_kneeling_medium_dark_skin_tone"],
            "surrogates": "🧎🏾‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_kneeling_tone5", "man_kneeling_dark_skin_tone"],
            "surrogates": "🧎🏿‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_running", "runner"],
        "surrogates": "🏃",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_running_tone1", "runner_tone1"],
            "surrogates": "🏃🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_running_tone2", "runner_tone2"],
            "surrogates": "🏃🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_running_tone3", "runner_tone3"],
            "surrogates": "🏃🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_running_tone4", "runner_tone4"],
            "surrogates": "🏃🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_running_tone5", "runner_tone5"],
            "surrogates": "🏃🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_running"],
        "surrogates": "🏃‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_running_tone1", "woman_running_light_skin_tone"],
            "surrogates": "🏃🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_running_tone2", "woman_running_medium_light_skin_tone"],
            "surrogates": "🏃🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_running_tone3", "woman_running_medium_skin_tone"],
            "surrogates": "🏃🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_running_tone4", "woman_running_medium_dark_skin_tone"],
            "surrogates": "🏃🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_running_tone5", "woman_running_dark_skin_tone"],
            "surrogates": "🏃🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_running"],
        "surrogates": "🏃‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_running_tone1", "man_running_light_skin_tone"],
            "surrogates": "🏃🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_running_tone2", "man_running_medium_light_skin_tone"],
            "surrogates": "🏃🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_running_tone3", "man_running_medium_skin_tone"],
            "surrogates": "🏃🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_running_tone4", "man_running_medium_dark_skin_tone"],
            "surrogates": "🏃🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_running_tone5", "man_running_dark_skin_tone"],
            "surrogates": "🏃🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_standing"],
        "surrogates": "🧍",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_standing_tone1", "person_standing_light_skin_tone"],
            "surrogates": "🧍🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_standing_tone2", "person_standing_medium_light_skin_tone"],
            "surrogates": "🧍🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_standing_tone3", "person_standing_medium_skin_tone"],
            "surrogates": "🧍🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_standing_tone4", "person_standing_medium_dark_skin_tone"],
            "surrogates": "🧍🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_standing_tone5", "person_standing_dark_skin_tone"],
            "surrogates": "🧍🏿",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_standing"],
        "surrogates": "🧍‍♀️",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_standing_tone1", "woman_standing_light_skin_tone"],
            "surrogates": "🧍🏻‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_standing_tone2", "woman_standing_medium_light_skin_tone"],
            "surrogates": "🧍🏼‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_standing_tone3", "woman_standing_medium_skin_tone"],
            "surrogates": "🧍🏽‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_standing_tone4", "woman_standing_medium_dark_skin_tone"],
            "surrogates": "🧍🏾‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_standing_tone5", "woman_standing_dark_skin_tone"],
            "surrogates": "🧍🏿‍♀️",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_standing"],
        "surrogates": "🧍‍♂️",
        "unicodeVersion": 12,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_standing_tone1", "man_standing_light_skin_tone"],
            "surrogates": "🧍🏻‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_standing_tone2", "man_standing_medium_light_skin_tone"],
            "surrogates": "🧍🏼‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_standing_tone3", "man_standing_medium_skin_tone"],
            "surrogates": "🧍🏽‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_standing_tone4", "man_standing_medium_dark_skin_tone"],
            "surrogates": "🧍🏾‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_standing_tone5", "man_standing_dark_skin_tone"],
            "surrogates": "🧍🏿‍♂️",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["people_holding_hands"],
        "surrogates": "🧑‍🤝‍🧑",
        "unicodeVersion": 12,
        "hasMultiDiversity": true,
        "diversityChildren": [{
            "names": ["people_holding_hands_tone1", "people_holding_hands_light_skin_tone"],
            "surrogates": "🧑🏻‍🤝‍🧑🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone1_tone2", "people_holding_hands_light_skin_tone_medium_light_skin_tone"],
            "surrogates": "🧑🏻‍🤝‍🧑🏼",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb", "1f3fc"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone1_tone3", "people_holding_hands_light_skin_tone_medium_skin_tone"],
            "surrogates": "🧑🏻‍🤝‍🧑🏽",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone1_tone4", "people_holding_hands_light_skin_tone_medium_dark_skin_tone"],
            "surrogates": "🧑🏻‍🤝‍🧑🏾",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone1_tone5", "people_holding_hands_light_skin_tone_dark_skin_tone"],
            "surrogates": "🧑🏻‍🤝‍🧑🏿",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone2_tone1", "people_holding_hands_medium_light_skin_tone_light_skin_tone"],
            "surrogates": "🧑🏼‍🤝‍🧑🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fc"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone2", "people_holding_hands_medium_light_skin_tone"],
            "surrogates": "🧑🏼‍🤝‍🧑🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone2_tone3", "people_holding_hands_medium_light_skin_tone_medium_skin_tone"],
            "surrogates": "🧑🏼‍🤝‍🧑🏽",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone2_tone4", "people_holding_hands_medium_light_skin_tone_medium_dark_skin_tone"],
            "surrogates": "🧑🏼‍🤝‍🧑🏾",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone2_tone5", "people_holding_hands_medium_light_skin_tone_dark_skin_tone"],
            "surrogates": "🧑🏼‍🤝‍🧑🏿",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone3_tone1", "people_holding_hands_medium_skin_tone_light_skin_tone"],
            "surrogates": "🧑🏽‍🤝‍🧑🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone3_tone2", "people_holding_hands_medium_skin_tone_medium_light_skin_tone"],
            "surrogates": "🧑🏽‍🤝‍🧑🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone3", "people_holding_hands_medium_skin_tone"],
            "surrogates": "🧑🏽‍🤝‍🧑🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone3_tone4", "people_holding_hands_medium_skin_tone_medium_dark_skin_tone"],
            "surrogates": "🧑🏽‍🤝‍🧑🏾",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone3_tone5", "people_holding_hands_medium_skin_tone_dark_skin_tone"],
            "surrogates": "🧑🏽‍🤝‍🧑🏿",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone4_tone1", "people_holding_hands_medium_dark_skin_tone_light_skin_tone"],
            "surrogates": "🧑🏾‍🤝‍🧑🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone4_tone2", "people_holding_hands_medium_dark_skin_tone_medium_light_skin_tone"],
            "surrogates": "🧑🏾‍🤝‍🧑🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone4_tone3", "people_holding_hands_medium_dark_skin_tone_medium_skin_tone"],
            "surrogates": "🧑🏾‍🤝‍🧑🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone4", "people_holding_hands_medium_dark_skin_tone"],
            "surrogates": "🧑🏾‍🤝‍🧑🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone4_tone5", "people_holding_hands_medium_dark_skin_tone_dark_skin_tone"],
            "surrogates": "🧑🏾‍🤝‍🧑🏿",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone5_tone1", "people_holding_hands_dark_skin_tone_light_skin_tone"],
            "surrogates": "🧑🏿‍🤝‍🧑🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone5_tone2", "people_holding_hands_dark_skin_tone_medium_light_skin_tone"],
            "surrogates": "🧑🏿‍🤝‍🧑🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone5_tone3", "people_holding_hands_dark_skin_tone_medium_skin_tone"],
            "surrogates": "🧑🏿‍🤝‍🧑🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone5_tone4", "people_holding_hands_dark_skin_tone_medium_dark_skin_tone"],
            "surrogates": "🧑🏿‍🤝‍🧑🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fe", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["people_holding_hands_tone5", "people_holding_hands_dark_skin_tone"],
            "surrogates": "🧑🏿‍🤝‍🧑🏿",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasMultiDiversityParent": true
        }]
    }, {
        "names": ["couple"],
        "surrogates": "👫",
        "unicodeVersion": 6,
        "hasMultiDiversity": true,
        "diversityChildren": [{
            "names": ["woman_and_man_holding_hands_tone1", "woman_and_man_holding_hands_light_skin_tone"],
            "surrogates": "👫🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone1_tone2", "woman_and_man_holding_hands_light_skin_tone_medium_light_skin_tone"],
            "surrogates": "👩🏻‍🤝‍👨🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fc"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone1_tone3", "woman_and_man_holding_hands_light_skin_tone_medium_skin_tone"],
            "surrogates": "👩🏻‍🤝‍👨🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone1_tone4", "woman_and_man_holding_hands_light_skin_tone_medium_dark_skin_tone"],
            "surrogates": "👩🏻‍🤝‍👨🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone1_tone5", "woman_and_man_holding_hands_light_skin_tone_dark_skin_tone"],
            "surrogates": "👩🏻‍🤝‍👨🏿",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone2_tone1", "woman_and_man_holding_hands_medium_light_skin_tone_light_skin_tone"],
            "surrogates": "👩🏼‍🤝‍👨🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fc"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone2", "woman_and_man_holding_hands_medium_light_skin_tone"],
            "surrogates": "👫🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone2_tone3", "woman_and_man_holding_hands_medium_light_skin_tone_medium_skin_tone"],
            "surrogates": "👩🏼‍🤝‍👨🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone2_tone4", "woman_and_man_holding_hands_medium_light_skin_tone_medium_dark_skin_tone"],
            "surrogates": "👩🏼‍🤝‍👨🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone2_tone5", "woman_and_man_holding_hands_medium_light_skin_tone_dark_skin_tone"],
            "surrogates": "👩🏼‍🤝‍👨🏿",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone3_tone1", "woman_and_man_holding_hands_medium_skin_tone_light_skin_tone"],
            "surrogates": "👩🏽‍🤝‍👨🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone3_tone2", "woman_and_man_holding_hands_medium_skin_tone_medium_light_skin_tone"],
            "surrogates": "👩🏽‍🤝‍👨🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone3", "woman_and_man_holding_hands_medium_skin_tone"],
            "surrogates": "👫🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone3_tone4", "woman_and_man_holding_hands_medium_skin_tone_medium_dark_skin_tone"],
            "surrogates": "👩🏽‍🤝‍👨🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fd", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone3_tone5", "woman_and_man_holding_hands_medium_skin_tone_dark_skin_tone"],
            "surrogates": "👩🏽‍🤝‍👨🏿",
            "unicodeVersion": 12,
            "diversity": ["1f3fd", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone4_tone1", "woman_and_man_holding_hands_medium_dark_skin_tone_light_skin_tone"],
            "surrogates": "👩🏾‍🤝‍👨🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone4_tone2", "woman_and_man_holding_hands_medium_dark_skin_tone_medium_light_skin_tone"],
            "surrogates": "👩🏾‍🤝‍👨🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone4_tone3", "woman_and_man_holding_hands_medium_dark_skin_tone_medium_skin_tone"],
            "surrogates": "👩🏾‍🤝‍👨🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone4", "woman_and_man_holding_hands_medium_dark_skin_tone"],
            "surrogates": "👫🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone4_tone5", "woman_and_man_holding_hands_medium_dark_skin_tone_dark_skin_tone"],
            "surrogates": "👩🏾‍🤝‍👨🏿",
            "unicodeVersion": 12,
            "diversity": ["1f3fe", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone5_tone1", "woman_and_man_holding_hands_dark_skin_tone_light_skin_tone"],
            "surrogates": "👩🏿‍🤝‍👨🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone5_tone2", "woman_and_man_holding_hands_dark_skin_tone_medium_light_skin_tone"],
            "surrogates": "👩🏿‍🤝‍👨🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone5_tone3", "woman_and_man_holding_hands_dark_skin_tone_medium_skin_tone"],
            "surrogates": "👩🏿‍🤝‍👨🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone5_tone4", "woman_and_man_holding_hands_dark_skin_tone_medium_dark_skin_tone"],
            "surrogates": "👩🏿‍🤝‍👨🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fe", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["woman_and_man_holding_hands_tone5", "woman_and_man_holding_hands_dark_skin_tone"],
            "surrogates": "👫🏿",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasMultiDiversityParent": true
        }]
    }, {
        "names": ["two_women_holding_hands"],
        "surrogates": "👭",
        "unicodeVersion": 6,
        "hasMultiDiversity": true,
        "diversityChildren": [{
            "names": ["women_holding_hands_tone1", "women_holding_hands_light_skin_tone"],
            "surrogates": "👭🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone1_tone2", "women_holding_hands_light_skin_tone_medium_light_skin_tone"],
            "surrogates": "👩🏻‍🤝‍👩🏼",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb", "1f3fc"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone1_tone3", "women_holding_hands_light_skin_tone_medium_skin_tone"],
            "surrogates": "👩🏻‍🤝‍👩🏽",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone1_tone4", "women_holding_hands_light_skin_tone_medium_dark_skin_tone"],
            "surrogates": "👩🏻‍🤝‍👩🏾",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone1_tone5", "women_holding_hands_light_skin_tone_dark_skin_tone"],
            "surrogates": "👩🏻‍🤝‍👩🏿",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone2_tone1", "women_holding_hands_medium_light_skin_tone_light_skin_tone"],
            "surrogates": "👩🏼‍🤝‍👩🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fc"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone2", "women_holding_hands_medium_light_skin_tone"],
            "surrogates": "👭🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone2_tone3", "women_holding_hands_medium_light_skin_tone_medium_skin_tone"],
            "surrogates": "👩🏼‍🤝‍👩🏽",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone2_tone4", "women_holding_hands_medium_light_skin_tone_medium_dark_skin_tone"],
            "surrogates": "👩🏼‍🤝‍👩🏾",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone2_tone5", "women_holding_hands_medium_light_skin_tone_dark_skin_tone"],
            "surrogates": "👩🏼‍🤝‍👩🏿",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone3_tone1", "women_holding_hands_medium_skin_tone_light_skin_tone"],
            "surrogates": "👩🏽‍🤝‍👩🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone3_tone2", "women_holding_hands_medium_skin_tone_medium_light_skin_tone"],
            "surrogates": "👩🏽‍🤝‍👩🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone3", "women_holding_hands_medium_skin_tone"],
            "surrogates": "👭🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone3_tone4", "women_holding_hands_medium_skin_tone_medium_dark_skin_tone"],
            "surrogates": "👩🏽‍🤝‍👩🏾",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone3_tone5", "women_holding_hands_medium_skin_tone_dark_skin_tone"],
            "surrogates": "👩🏽‍🤝‍👩🏿",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone4_tone1", "women_holding_hands_medium_dark_skin_tone_light_skin_tone"],
            "surrogates": "👩🏾‍🤝‍👩🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone4_tone2", "women_holding_hands_medium_dark_skin_tone_medium_light_skin_tone"],
            "surrogates": "👩🏾‍🤝‍👩🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone4_tone3", "women_holding_hands_medium_dark_skin_tone_medium_skin_tone"],
            "surrogates": "👩🏾‍🤝‍👩🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone4", "women_holding_hands_medium_dark_skin_tone"],
            "surrogates": "👭🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone4_tone5", "women_holding_hands_medium_dark_skin_tone_dark_skin_tone"],
            "surrogates": "👩🏾‍🤝‍👩🏿",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone5_tone1", "women_holding_hands_dark_skin_tone_light_skin_tone"],
            "surrogates": "👩🏿‍🤝‍👩🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone5_tone2", "women_holding_hands_dark_skin_tone_medium_light_skin_tone"],
            "surrogates": "👩🏿‍🤝‍👩🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone5_tone3", "women_holding_hands_dark_skin_tone_medium_skin_tone"],
            "surrogates": "👩🏿‍🤝‍👩🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone5_tone4", "women_holding_hands_dark_skin_tone_medium_dark_skin_tone"],
            "surrogates": "👩🏿‍🤝‍👩🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fe", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["women_holding_hands_tone5", "women_holding_hands_dark_skin_tone"],
            "surrogates": "👭🏿",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasMultiDiversityParent": true
        }]
    }, {
        "names": ["two_men_holding_hands"],
        "surrogates": "👬",
        "unicodeVersion": 6,
        "hasMultiDiversity": true,
        "diversityChildren": [{
            "names": ["men_holding_hands_tone1", "men_holding_hands_light_skin_tone"],
            "surrogates": "👬🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone1_tone2", "men_holding_hands_light_skin_tone_medium_light_skin_tone"],
            "surrogates": "👨🏻‍🤝‍👨🏼",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb", "1f3fc"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone1_tone3", "men_holding_hands_light_skin_tone_medium_skin_tone"],
            "surrogates": "👨🏻‍🤝‍👨🏽",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone1_tone4", "men_holding_hands_light_skin_tone_medium_dark_skin_tone"],
            "surrogates": "👨🏻‍🤝‍👨🏾",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone1_tone5", "men_holding_hands_light_skin_tone_dark_skin_tone"],
            "surrogates": "👨🏻‍🤝‍👨🏿",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fb", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone2_tone1", "men_holding_hands_medium_light_skin_tone_light_skin_tone"],
            "surrogates": "👨🏼‍🤝‍👨🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fc"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone2", "men_holding_hands_medium_light_skin_tone"],
            "surrogates": "👬🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone2_tone3", "men_holding_hands_medium_light_skin_tone_medium_skin_tone"],
            "surrogates": "👨🏼‍🤝‍👨🏽",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone2_tone4", "men_holding_hands_medium_light_skin_tone_medium_dark_skin_tone"],
            "surrogates": "👨🏼‍🤝‍👨🏾",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone2_tone5", "men_holding_hands_medium_light_skin_tone_dark_skin_tone"],
            "surrogates": "👨🏼‍🤝‍👨🏿",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fc", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone3_tone1", "men_holding_hands_medium_skin_tone_light_skin_tone"],
            "surrogates": "👨🏽‍🤝‍👨🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone3_tone2", "men_holding_hands_medium_skin_tone_medium_light_skin_tone"],
            "surrogates": "👨🏽‍🤝‍👨🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone3", "men_holding_hands_medium_skin_tone"],
            "surrogates": "👬🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone3_tone4", "men_holding_hands_medium_skin_tone_medium_dark_skin_tone"],
            "surrogates": "👨🏽‍🤝‍👨🏾",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone3_tone5", "men_holding_hands_medium_skin_tone_dark_skin_tone"],
            "surrogates": "👨🏽‍🤝‍👨🏿",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fd", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone4_tone1", "men_holding_hands_medium_dark_skin_tone_light_skin_tone"],
            "surrogates": "👨🏾‍🤝‍👨🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone4_tone2", "men_holding_hands_medium_dark_skin_tone_medium_light_skin_tone"],
            "surrogates": "👨🏾‍🤝‍👨🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone4_tone3", "men_holding_hands_medium_dark_skin_tone_medium_skin_tone"],
            "surrogates": "👨🏾‍🤝‍👨🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd", "1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone4", "men_holding_hands_medium_dark_skin_tone"],
            "surrogates": "👬🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fe"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone4_tone5", "men_holding_hands_medium_dark_skin_tone_dark_skin_tone"],
            "surrogates": "👨🏾‍🤝‍👨🏿",
            "unicodeVersion": 12.1,
            "diversity": ["1f3fe", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone5_tone1", "men_holding_hands_dark_skin_tone_light_skin_tone"],
            "surrogates": "👨🏿‍🤝‍👨🏻",
            "unicodeVersion": 12,
            "diversity": ["1f3fb", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone5_tone2", "men_holding_hands_dark_skin_tone_medium_light_skin_tone"],
            "surrogates": "👨🏿‍🤝‍👨🏼",
            "unicodeVersion": 12,
            "diversity": ["1f3fc", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone5_tone3", "men_holding_hands_dark_skin_tone_medium_skin_tone"],
            "surrogates": "👨🏿‍🤝‍👨🏽",
            "unicodeVersion": 12,
            "diversity": ["1f3fd", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone5_tone4", "men_holding_hands_dark_skin_tone_medium_dark_skin_tone"],
            "surrogates": "👨🏿‍🤝‍👨🏾",
            "unicodeVersion": 12,
            "diversity": ["1f3fe", "1f3ff"],
            "hasMultiDiversityParent": true
        }, {
            "names": ["men_holding_hands_tone5", "men_holding_hands_dark_skin_tone"],
            "surrogates": "👬🏿",
            "unicodeVersion": 12,
            "diversity": ["1f3ff"],
            "hasMultiDiversityParent": true
        }]
    }, {
        "names": ["couple_with_heart"],
        "surrogates": "💑",
        "unicodeVersion": 6
    }, {
        "names": ["couple_with_heart_woman_man"],
        "surrogates": "👩‍❤️‍👨",
        "unicodeVersion": 6
    }, {
        "names": ["couple_ww", "couple_with_heart_ww"],
        "surrogates": "👩‍❤️‍👩",
        "unicodeVersion": 6
    }, {
        "names": ["couple_mm", "couple_with_heart_mm"],
        "surrogates": "👨‍❤️‍👨",
        "unicodeVersion": 6
    }, {
        "names": ["couplekiss"],
        "surrogates": "💏",
        "unicodeVersion": 6
    }, {
        "names": ["kiss_woman_man"],
        "surrogates": "👩‍❤️‍💋‍👨",
        "unicodeVersion": 6
    }, {
        "names": ["kiss_ww", "couplekiss_ww"],
        "surrogates": "👩‍❤️‍💋‍👩",
        "unicodeVersion": 6
    }, {
        "names": ["kiss_mm", "couplekiss_mm"],
        "surrogates": "👨‍❤️‍💋‍👨",
        "unicodeVersion": 6
    }, {
        "names": ["family"],
        "surrogates": "👪",
        "unicodeVersion": 6
    }, {
        "names": ["family_man_woman_boy"],
        "surrogates": "👨‍👩‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_mwg"],
        "surrogates": "👨‍👩‍👧",
        "unicodeVersion": 6
    }, {
        "names": ["family_mwgb"],
        "surrogates": "👨‍👩‍👧‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_mwbb"],
        "surrogates": "👨‍👩‍👦‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_mwgg"],
        "surrogates": "👨‍👩‍👧‍👧",
        "unicodeVersion": 6
    }, {
        "names": ["family_wwb"],
        "surrogates": "👩‍👩‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_wwg"],
        "surrogates": "👩‍👩‍👧",
        "unicodeVersion": 6
    }, {
        "names": ["family_wwgb"],
        "surrogates": "👩‍👩‍👧‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_wwbb"],
        "surrogates": "👩‍👩‍👦‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_wwgg"],
        "surrogates": "👩‍👩‍👧‍👧",
        "unicodeVersion": 6
    }, {
        "names": ["family_mmb"],
        "surrogates": "👨‍👨‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_mmg"],
        "surrogates": "👨‍👨‍👧",
        "unicodeVersion": 6
    }, {
        "names": ["family_mmgb"],
        "surrogates": "👨‍👨‍👧‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_mmbb"],
        "surrogates": "👨‍👨‍👦‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_mmgg"],
        "surrogates": "👨‍👨‍👧‍👧",
        "unicodeVersion": 6
    }, {
        "names": ["family_woman_boy"],
        "surrogates": "👩‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_woman_girl"],
        "surrogates": "👩‍👧",
        "unicodeVersion": 6
    }, {
        "names": ["family_woman_girl_boy"],
        "surrogates": "👩‍👧‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_woman_boy_boy"],
        "surrogates": "👩‍👦‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_woman_girl_girl"],
        "surrogates": "👩‍👧‍👧",
        "unicodeVersion": 6
    }, {
        "names": ["family_man_boy"],
        "surrogates": "👨‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_man_girl"],
        "surrogates": "👨‍👧",
        "unicodeVersion": 6
    }, {
        "names": ["family_man_girl_boy"],
        "surrogates": "👨‍👧‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_man_boy_boy"],
        "surrogates": "👨‍👦‍👦",
        "unicodeVersion": 6
    }, {
        "names": ["family_man_girl_girl"],
        "surrogates": "👨‍👧‍👧",
        "unicodeVersion": 6
    }, {
        "names": ["yarn"],
        "surrogates": "🧶",
        "unicodeVersion": 11
    }, {
        "names": ["thread"],
        "surrogates": "🧵",
        "unicodeVersion": 11
    }, {
        "names": ["coat"],
        "surrogates": "🧥",
        "unicodeVersion": 10
    }, {
        "names": ["lab_coat"],
        "surrogates": "🥼",
        "unicodeVersion": 11
    }, {
        "names": ["safety_vest"],
        "surrogates": "🦺",
        "unicodeVersion": 12
    }, {
        "names": ["womans_clothes"],
        "surrogates": "👚",
        "unicodeVersion": 6
    }, {
        "names": ["shirt"],
        "surrogates": "👕",
        "unicodeVersion": 6
    }, {
        "names": ["jeans"],
        "surrogates": "👖",
        "unicodeVersion": 6
    }, {
        "names": ["briefs"],
        "surrogates": "🩲",
        "unicodeVersion": 12
    }, {
        "names": ["shorts"],
        "surrogates": "🩳",
        "unicodeVersion": 12
    }, {
        "names": ["necktie"],
        "surrogates": "👔",
        "unicodeVersion": 6
    }, {
        "names": ["dress"],
        "surrogates": "👗",
        "unicodeVersion": 6
    }, {
        "names": ["bikini"],
        "surrogates": "👙",
        "unicodeVersion": 6
    }, {
        "names": ["one_piece_swimsuit"],
        "surrogates": "🩱",
        "unicodeVersion": 12
    }, {
        "names": ["kimono"],
        "surrogates": "👘",
        "unicodeVersion": 6
    }, {
        "names": ["sari"],
        "surrogates": "🥻",
        "unicodeVersion": 12
    }, {
        "names": ["womans_flat_shoe"],
        "surrogates": "🥿",
        "unicodeVersion": 11
    }, {
        "names": ["high_heel"],
        "surrogates": "👠",
        "unicodeVersion": 6
    }, {
        "names": ["sandal"],
        "surrogates": "👡",
        "unicodeVersion": 6
    }, {
        "names": ["boot"],
        "surrogates": "👢",
        "unicodeVersion": 6
    }, {
        "names": ["mans_shoe"],
        "surrogates": "👞",
        "unicodeVersion": 6
    }, {
        "names": ["athletic_shoe"],
        "surrogates": "👟",
        "unicodeVersion": 6
    }, {
        "names": ["hiking_boot"],
        "surrogates": "🥾",
        "unicodeVersion": 11
    }, {
        "names": ["thong_sandal"],
        "surrogates": "🩴",
        "unicodeVersion": 13
    }, {
        "names": ["socks"],
        "surrogates": "🧦",
        "unicodeVersion": 10
    }, {
        "names": ["gloves"],
        "surrogates": "🧤",
        "unicodeVersion": 10
    }, {
        "names": ["scarf"],
        "surrogates": "🧣",
        "unicodeVersion": 10
    }, {
        "names": ["tophat"],
        "surrogates": "🎩",
        "unicodeVersion": 6
    }, {
        "names": ["billed_cap"],
        "surrogates": "🧢",
        "unicodeVersion": 10
    }, {
        "names": ["womans_hat"],
        "surrogates": "👒",
        "unicodeVersion": 6
    }, {
        "names": ["mortar_board"],
        "surrogates": "🎓",
        "unicodeVersion": 6
    }, {
        "names": ["helmet_with_cross", "helmet_with_white_cross"],
        "surrogates": "⛑️",
        "unicodeVersion": 5.2
    }, {
        "names": ["military_helmet"],
        "surrogates": "🪖",
        "unicodeVersion": 13
    }, {
        "names": ["crown"],
        "surrogates": "👑",
        "unicodeVersion": 6
    }, {
        "names": ["ring"],
        "surrogates": "💍",
        "unicodeVersion": 6
    }, {
        "names": ["pouch"],
        "surrogates": "👝",
        "unicodeVersion": 6
    }, {
        "names": ["purse"],
        "surrogates": "👛",
        "unicodeVersion": 6
    }, {
        "names": ["handbag"],
        "surrogates": "👜",
        "unicodeVersion": 6
    }, {
        "names": ["briefcase"],
        "surrogates": "💼",
        "unicodeVersion": 6
    }, {
        "names": ["school_satchel"],
        "surrogates": "🎒",
        "unicodeVersion": 6
    }, {
        "names": ["luggage"],
        "surrogates": "🧳",
        "unicodeVersion": 11
    }, {
        "names": ["eyeglasses"],
        "surrogates": "👓",
        "unicodeVersion": 6
    }, {
        "names": ["dark_sunglasses"],
        "surrogates": "🕶️",
        "unicodeVersion": 7
    }, {
        "names": ["goggles"],
        "surrogates": "🥽",
        "unicodeVersion": 11
    }, {
        "names": ["closed_umbrella"],
        "surrogates": "🌂",
        "unicodeVersion": 6
    }],
    "nature": [{
        "names": ["dog"],
        "surrogates": "🐶",
        "unicodeVersion": 6
    }, {
        "names": ["cat"],
        "surrogates": "🐱",
        "unicodeVersion": 6
    }, {
        "names": ["mouse"],
        "surrogates": "🐭",
        "unicodeVersion": 6
    }, {
        "names": ["hamster"],
        "surrogates": "🐹",
        "unicodeVersion": 6
    }, {
        "names": ["rabbit"],
        "surrogates": "🐰",
        "unicodeVersion": 6
    }, {
        "names": ["fox", "fox_face"],
        "surrogates": "🦊",
        "unicodeVersion": 9
    }, {
        "names": ["bear"],
        "surrogates": "🐻",
        "unicodeVersion": 6
    }, {
        "names": ["panda_face"],
        "surrogates": "🐼",
        "unicodeVersion": 6
    }, {
        "names": ["polar_bear"],
        "surrogates": "🐻‍❄️",
        "unicodeVersion": 13
    }, {
        "names": ["koala"],
        "surrogates": "🐨",
        "unicodeVersion": 6
    }, {
        "names": ["tiger"],
        "surrogates": "🐯",
        "unicodeVersion": 6
    }, {
        "names": ["lion_face", "lion"],
        "surrogates": "🦁",
        "unicodeVersion": 8
    }, {
        "names": ["cow"],
        "surrogates": "🐮",
        "unicodeVersion": 6
    }, {
        "names": ["pig"],
        "surrogates": "🐷",
        "unicodeVersion": 6
    }, {
        "names": ["pig_nose"],
        "surrogates": "🐽",
        "unicodeVersion": 6
    }, {
        "names": ["frog"],
        "surrogates": "🐸",
        "unicodeVersion": 6
    }, {
        "names": ["monkey_face"],
        "surrogates": "🐵",
        "unicodeVersion": 6
    }, {
        "names": ["see_no_evil"],
        "surrogates": "🙈",
        "unicodeVersion": 6
    }, {
        "names": ["hear_no_evil"],
        "surrogates": "🙉",
        "unicodeVersion": 6
    }, {
        "names": ["speak_no_evil"],
        "surrogates": "🙊",
        "unicodeVersion": 6
    }, {
        "names": ["monkey"],
        "surrogates": "🐒",
        "unicodeVersion": 6
    }, {
        "names": ["chicken"],
        "surrogates": "🐔",
        "unicodeVersion": 6
    }, {
        "names": ["penguin"],
        "surrogates": "🐧",
        "unicodeVersion": 6
    }, {
        "names": ["bird"],
        "surrogates": "🐦",
        "unicodeVersion": 6
    }, {
        "names": ["baby_chick"],
        "surrogates": "🐤",
        "unicodeVersion": 6
    }, {
        "names": ["hatching_chick"],
        "surrogates": "🐣",
        "unicodeVersion": 6
    }, {
        "names": ["hatched_chick"],
        "surrogates": "🐥",
        "unicodeVersion": 6
    }, {
        "names": ["duck"],
        "surrogates": "🦆",
        "unicodeVersion": 9
    }, {
        "names": ["dodo"],
        "surrogates": "🦤",
        "unicodeVersion": 13
    }, {
        "names": ["eagle"],
        "surrogates": "🦅",
        "unicodeVersion": 9
    }, {
        "names": ["owl"],
        "surrogates": "🦉",
        "unicodeVersion": 9
    }, {
        "names": ["bat"],
        "surrogates": "🦇",
        "unicodeVersion": 9
    }, {
        "names": ["wolf"],
        "surrogates": "🐺",
        "unicodeVersion": 6
    }, {
        "names": ["boar"],
        "surrogates": "🐗",
        "unicodeVersion": 6
    }, {
        "names": ["horse"],
        "surrogates": "🐴",
        "unicodeVersion": 6
    }, {
        "names": ["unicorn", "unicorn_face"],
        "surrogates": "🦄",
        "unicodeVersion": 8
    }, {
        "names": ["bee"],
        "surrogates": "🐝",
        "unicodeVersion": 6
    }, {
        "names": ["bug"],
        "surrogates": "🐛",
        "unicodeVersion": 6
    }, {
        "names": ["butterfly"],
        "surrogates": "🦋",
        "unicodeVersion": 9
    }, {
        "names": ["snail"],
        "surrogates": "🐌",
        "unicodeVersion": 6
    }, {
        "names": ["worm"],
        "surrogates": "🪱",
        "unicodeVersion": 13
    }, {
        "names": ["lady_beetle"],
        "surrogates": "🐞",
        "unicodeVersion": 6
    }, {
        "names": ["ant"],
        "surrogates": "🐜",
        "unicodeVersion": 6
    }, {
        "names": ["fly"],
        "surrogates": "🪰",
        "unicodeVersion": 13
    }, {
        "names": ["mosquito"],
        "surrogates": "🦟",
        "unicodeVersion": 11
    }, {
        "names": ["cockroach"],
        "surrogates": "🪳",
        "unicodeVersion": 13
    }, {
        "names": ["beetle"],
        "surrogates": "🪲",
        "unicodeVersion": 13
    }, {
        "names": ["cricket"],
        "surrogates": "🦗",
        "unicodeVersion": 10
    }, {
        "names": ["spider"],
        "surrogates": "🕷️",
        "unicodeVersion": 7
    }, {
        "names": ["spider_web"],
        "surrogates": "🕸️",
        "unicodeVersion": 7
    }, {
        "names": ["scorpion"],
        "surrogates": "🦂",
        "unicodeVersion": 8
    }, {
        "names": ["turtle"],
        "surrogates": "🐢",
        "unicodeVersion": 6
    }, {
        "names": ["snake"],
        "surrogates": "🐍",
        "unicodeVersion": 6
    }, {
        "names": ["lizard"],
        "surrogates": "🦎",
        "unicodeVersion": 9
    }, {
        "names": ["t_rex"],
        "surrogates": "🦖",
        "unicodeVersion": 10
    }, {
        "names": ["sauropod"],
        "surrogates": "🦕",
        "unicodeVersion": 10
    }, {
        "names": ["octopus"],
        "surrogates": "🐙",
        "unicodeVersion": 6
    }, {
        "names": ["squid"],
        "surrogates": "🦑",
        "unicodeVersion": 9
    }, {
        "names": ["shrimp"],
        "surrogates": "🦐",
        "unicodeVersion": 9
    }, {
        "names": ["lobster"],
        "surrogates": "🦞",
        "unicodeVersion": 11
    }, {
        "names": ["crab"],
        "surrogates": "🦀",
        "unicodeVersion": 8
    }, {
        "names": ["blowfish"],
        "surrogates": "🐡",
        "unicodeVersion": 6
    }, {
        "names": ["tropical_fish"],
        "surrogates": "🐠",
        "unicodeVersion": 6
    }, {
        "names": ["fish"],
        "surrogates": "🐟",
        "unicodeVersion": 6
    }, {
        "names": ["seal"],
        "surrogates": "🦭",
        "unicodeVersion": 13
    }, {
        "names": ["dolphin"],
        "surrogates": "🐬",
        "unicodeVersion": 6
    }, {
        "names": ["whale"],
        "surrogates": "🐳",
        "unicodeVersion": 6
    }, {
        "names": ["whale2"],
        "surrogates": "🐋",
        "unicodeVersion": 6
    }, {
        "names": ["shark"],
        "surrogates": "🦈",
        "unicodeVersion": 9
    }, {
        "names": ["crocodile"],
        "surrogates": "🐊",
        "unicodeVersion": 6
    }, {
        "names": ["tiger2"],
        "surrogates": "🐅",
        "unicodeVersion": 6
    }, {
        "names": ["leopard"],
        "surrogates": "🐆",
        "unicodeVersion": 6
    }, {
        "names": ["zebra"],
        "surrogates": "🦓",
        "unicodeVersion": 10
    }, {
        "names": ["gorilla"],
        "surrogates": "🦍",
        "unicodeVersion": 9
    }, {
        "names": ["orangutan"],
        "surrogates": "🦧",
        "unicodeVersion": 12
    }, {
        "names": ["elephant"],
        "surrogates": "🐘",
        "unicodeVersion": 6
    }, {
        "names": ["mammoth"],
        "surrogates": "🦣",
        "unicodeVersion": 13
    }, {
        "names": ["bison"],
        "surrogates": "🦬",
        "unicodeVersion": 13
    }, {
        "names": ["hippopotamus"],
        "surrogates": "🦛",
        "unicodeVersion": 11
    }, {
        "names": ["rhino", "rhinoceros"],
        "surrogates": "🦏",
        "unicodeVersion": 9
    }, {
        "names": ["dromedary_camel"],
        "surrogates": "🐪",
        "unicodeVersion": 6
    }, {
        "names": ["camel"],
        "surrogates": "🐫",
        "unicodeVersion": 6
    }, {
        "names": ["giraffe"],
        "surrogates": "🦒",
        "unicodeVersion": 10
    }, {
        "names": ["kangaroo"],
        "surrogates": "🦘",
        "unicodeVersion": 11
    }, {
        "names": ["water_buffalo"],
        "surrogates": "🐃",
        "unicodeVersion": 6
    }, {
        "names": ["ox"],
        "surrogates": "🐂",
        "unicodeVersion": 6
    }, {
        "names": ["cow2"],
        "surrogates": "🐄",
        "unicodeVersion": 6
    }, {
        "names": ["racehorse"],
        "surrogates": "🐎",
        "unicodeVersion": 6
    }, {
        "names": ["pig2"],
        "surrogates": "🐖",
        "unicodeVersion": 6
    }, {
        "names": ["ram"],
        "surrogates": "🐏",
        "unicodeVersion": 6
    }, {
        "names": ["sheep"],
        "surrogates": "🐑",
        "unicodeVersion": 6
    }, {
        "names": ["llama"],
        "surrogates": "🦙",
        "unicodeVersion": 11
    }, {
        "names": ["goat"],
        "surrogates": "🐐",
        "unicodeVersion": 6
    }, {
        "names": ["deer"],
        "surrogates": "🦌",
        "unicodeVersion": 9
    }, {
        "names": ["dog2"],
        "surrogates": "🐕",
        "unicodeVersion": 6
    }, {
        "names": ["poodle"],
        "surrogates": "🐩",
        "unicodeVersion": 6
    }, {
        "names": ["guide_dog"],
        "surrogates": "🦮",
        "unicodeVersion": 12
    }, {
        "names": ["service_dog"],
        "surrogates": "🐕‍🦺",
        "unicodeVersion": 12
    }, {
        "names": ["cat2"],
        "surrogates": "🐈",
        "unicodeVersion": 6
    }, {
        "names": ["black_cat"],
        "surrogates": "🐈‍⬛",
        "unicodeVersion": 13
    }, {
        "names": ["rooster"],
        "surrogates": "🐓",
        "unicodeVersion": 6
    }, {
        "names": ["turkey"],
        "surrogates": "🦃",
        "unicodeVersion": 8
    }, {
        "names": ["peacock"],
        "surrogates": "🦚",
        "unicodeVersion": 11
    }, {
        "names": ["parrot"],
        "surrogates": "🦜",
        "unicodeVersion": 11
    }, {
        "names": ["swan"],
        "surrogates": "🦢",
        "unicodeVersion": 11
    }, {
        "names": ["flamingo"],
        "surrogates": "🦩",
        "unicodeVersion": 12
    }, {
        "names": ["dove", "dove_of_peace"],
        "surrogates": "🕊️",
        "unicodeVersion": 7
    }, {
        "names": ["rabbit2"],
        "surrogates": "🐇",
        "unicodeVersion": 6
    }, {
        "names": ["raccoon"],
        "surrogates": "🦝",
        "unicodeVersion": 11
    }, {
        "names": ["skunk"],
        "surrogates": "🦨",
        "unicodeVersion": 12
    }, {
        "names": ["badger"],
        "surrogates": "🦡",
        "unicodeVersion": 11
    }, {
        "names": ["beaver"],
        "surrogates": "🦫",
        "unicodeVersion": 13
    }, {
        "names": ["otter"],
        "surrogates": "🦦",
        "unicodeVersion": 12
    }, {
        "names": ["sloth"],
        "surrogates": "🦥",
        "unicodeVersion": 12
    }, {
        "names": ["mouse2"],
        "surrogates": "🐁",
        "unicodeVersion": 6
    }, {
        "names": ["rat"],
        "surrogates": "🐀",
        "unicodeVersion": 6
    }, {
        "names": ["chipmunk"],
        "surrogates": "🐿️",
        "unicodeVersion": 7
    }, {
        "names": ["hedgehog"],
        "surrogates": "🦔",
        "unicodeVersion": 10
    }, {
        "names": ["feet", "paw_prints"],
        "surrogates": "🐾",
        "unicodeVersion": 6
    }, {
        "names": ["dragon"],
        "surrogates": "🐉",
        "unicodeVersion": 6
    }, {
        "names": ["dragon_face"],
        "surrogates": "🐲",
        "unicodeVersion": 6
    }, {
        "names": ["cactus"],
        "surrogates": "🌵",
        "unicodeVersion": 6
    }, {
        "names": ["christmas_tree"],
        "surrogates": "🎄",
        "unicodeVersion": 6
    }, {
        "names": ["evergreen_tree"],
        "surrogates": "🌲",
        "unicodeVersion": 6
    }, {
        "names": ["deciduous_tree"],
        "surrogates": "🌳",
        "unicodeVersion": 6
    }, {
        "names": ["palm_tree"],
        "surrogates": "🌴",
        "unicodeVersion": 6
    }, {
        "names": ["seedling"],
        "surrogates": "🌱",
        "unicodeVersion": 6
    }, {
        "names": ["herb"],
        "surrogates": "🌿",
        "unicodeVersion": 6
    }, {
        "names": ["shamrock"],
        "surrogates": "☘️",
        "unicodeVersion": 4.1
    }, {
        "names": ["four_leaf_clover"],
        "surrogates": "🍀",
        "unicodeVersion": 6
    }, {
        "names": ["bamboo"],
        "surrogates": "🎍",
        "unicodeVersion": 6
    }, {
        "names": ["tanabata_tree"],
        "surrogates": "🎋",
        "unicodeVersion": 6
    }, {
        "names": ["leaves"],
        "surrogates": "🍃",
        "unicodeVersion": 6
    }, {
        "names": ["fallen_leaf"],
        "surrogates": "🍂",
        "unicodeVersion": 6
    }, {
        "names": ["maple_leaf"],
        "surrogates": "🍁",
        "unicodeVersion": 6
    }, {
        "names": ["feather"],
        "surrogates": "🪶",
        "unicodeVersion": 13
    }, {
        "names": ["mushroom"],
        "surrogates": "🍄",
        "unicodeVersion": 6
    }, {
        "names": ["shell"],
        "surrogates": "🐚",
        "unicodeVersion": 6
    }, {
        "names": ["rock"],
        "surrogates": "🪨",
        "unicodeVersion": 13
    }, {
        "names": ["wood"],
        "surrogates": "🪵",
        "unicodeVersion": 13
    }, {
        "names": ["ear_of_rice"],
        "surrogates": "🌾",
        "unicodeVersion": 6
    }, {
        "names": ["potted_plant"],
        "surrogates": "🪴",
        "unicodeVersion": 13
    }, {
        "names": ["bouquet"],
        "surrogates": "💐",
        "unicodeVersion": 6
    }, {
        "names": ["tulip"],
        "surrogates": "🌷",
        "unicodeVersion": 6
    }, {
        "names": ["rose"],
        "surrogates": "🌹",
        "unicodeVersion": 6
    }, {
        "names": ["wilted_rose", "wilted_flower"],
        "surrogates": "🥀",
        "unicodeVersion": 9
    }, {
        "names": ["hibiscus"],
        "surrogates": "🌺",
        "unicodeVersion": 6
    }, {
        "names": ["cherry_blossom"],
        "surrogates": "🌸",
        "unicodeVersion": 6
    }, {
        "names": ["blossom"],
        "surrogates": "🌼",
        "unicodeVersion": 6
    }, {
        "names": ["sunflower"],
        "surrogates": "🌻",
        "unicodeVersion": 6
    }, {
        "names": ["sun_with_face"],
        "surrogates": "🌞",
        "unicodeVersion": 6
    }, {
        "names": ["full_moon_with_face"],
        "surrogates": "🌝",
        "unicodeVersion": 6
    }, {
        "names": ["first_quarter_moon_with_face"],
        "surrogates": "🌛",
        "unicodeVersion": 6
    }, {
        "names": ["last_quarter_moon_with_face"],
        "surrogates": "🌜",
        "unicodeVersion": 6
    }, {
        "names": ["new_moon_with_face"],
        "surrogates": "🌚",
        "unicodeVersion": 6
    }, {
        "names": ["full_moon"],
        "surrogates": "🌕",
        "unicodeVersion": 6
    }, {
        "names": ["waning_gibbous_moon"],
        "surrogates": "🌖",
        "unicodeVersion": 6
    }, {
        "names": ["last_quarter_moon"],
        "surrogates": "🌗",
        "unicodeVersion": 6
    }, {
        "names": ["waning_crescent_moon"],
        "surrogates": "🌘",
        "unicodeVersion": 6
    }, {
        "names": ["new_moon"],
        "surrogates": "🌑",
        "unicodeVersion": 6
    }, {
        "names": ["waxing_crescent_moon"],
        "surrogates": "🌒",
        "unicodeVersion": 6
    }, {
        "names": ["first_quarter_moon"],
        "surrogates": "🌓",
        "unicodeVersion": 6
    }, {
        "names": ["waxing_gibbous_moon"],
        "surrogates": "🌔",
        "unicodeVersion": 6
    }, {
        "names": ["crescent_moon"],
        "surrogates": "🌙",
        "unicodeVersion": 6
    }, {
        "names": ["earth_americas"],
        "surrogates": "🌎",
        "unicodeVersion": 6
    }, {
        "names": ["earth_africa"],
        "surrogates": "🌍",
        "unicodeVersion": 6
    }, {
        "names": ["earth_asia"],
        "surrogates": "🌏",
        "unicodeVersion": 6
    }, {
        "names": ["ringed_planet"],
        "surrogates": "🪐",
        "unicodeVersion": 12
    }, {
        "names": ["dizzy"],
        "surrogates": "💫",
        "unicodeVersion": 6
    }, {
        "names": ["star"],
        "surrogates": "⭐",
        "unicodeVersion": 5.1
    }, {
        "names": ["star2"],
        "surrogates": "🌟",
        "unicodeVersion": 6
    }, {
        "names": ["sparkles"],
        "surrogates": "✨",
        "unicodeVersion": 6
    }, {
        "names": ["zap"],
        "surrogates": "⚡",
        "unicodeVersion": 4
    }, {
        "names": ["comet"],
        "surrogates": "☄️",
        "unicodeVersion": 1.1
    }, {
        "names": ["boom"],
        "surrogates": "💥",
        "unicodeVersion": 6
    }, {
        "names": ["fire", "flame"],
        "surrogates": "🔥",
        "unicodeVersion": 6
    }, {
        "names": ["cloud_tornado", "cloud_with_tornado"],
        "surrogates": "🌪️",
        "unicodeVersion": 7
    }, {
        "names": ["rainbow"],
        "surrogates": "🌈",
        "unicodeVersion": 6
    }, {
        "names": ["sunny"],
        "surrogates": "☀️",
        "unicodeVersion": 1.1
    }, {
        "names": ["white_sun_small_cloud", "white_sun_with_small_cloud"],
        "surrogates": "🌤️",
        "unicodeVersion": 7
    }, {
        "names": ["partly_sunny"],
        "surrogates": "⛅",
        "unicodeVersion": 5.2
    }, {
        "names": ["white_sun_cloud", "white_sun_behind_cloud"],
        "surrogates": "🌥️",
        "unicodeVersion": 7
    }, {
        "names": ["cloud"],
        "surrogates": "☁️",
        "unicodeVersion": 1.1
    }, {
        "names": ["white_sun_rain_cloud", "white_sun_behind_cloud_with_rain"],
        "surrogates": "🌦️",
        "unicodeVersion": 7
    }, {
        "names": ["cloud_rain", "cloud_with_rain"],
        "surrogates": "🌧️",
        "unicodeVersion": 7
    }, {
        "names": ["thunder_cloud_rain", "thunder_cloud_and_rain"],
        "surrogates": "⛈️",
        "unicodeVersion": 5.2
    }, {
        "names": ["cloud_lightning", "cloud_with_lightning"],
        "surrogates": "🌩️",
        "unicodeVersion": 7
    }, {
        "names": ["cloud_snow", "cloud_with_snow"],
        "surrogates": "🌨️",
        "unicodeVersion": 7
    }, {
        "names": ["snowflake"],
        "surrogates": "❄️",
        "unicodeVersion": 1.1
    }, {
        "names": ["snowman2"],
        "surrogates": "☃️",
        "unicodeVersion": 1.1
    }, {
        "names": ["snowman"],
        "surrogates": "⛄",
        "unicodeVersion": 5.2
    }, {
        "names": ["wind_blowing_face"],
        "surrogates": "🌬️",
        "unicodeVersion": 7
    }, {
        "names": ["dash"],
        "surrogates": "💨",
        "unicodeVersion": 6
    }, {
        "names": ["droplet"],
        "surrogates": "💧",
        "unicodeVersion": 6
    }, {
        "names": ["sweat_drops"],
        "surrogates": "💦",
        "unicodeVersion": 6
    }, {
        "names": ["umbrella"],
        "surrogates": "☔",
        "unicodeVersion": 4
    }, {
        "names": ["umbrella2"],
        "surrogates": "☂️",
        "unicodeVersion": 1.1
    }, {
        "names": ["ocean"],
        "surrogates": "🌊",
        "unicodeVersion": 6
    }, {
        "names": ["fog"],
        "surrogates": "🌫️",
        "unicodeVersion": 7
    }],
    "food": [{
        "names": ["green_apple"],
        "surrogates": "🍏",
        "unicodeVersion": 6
    }, {
        "names": ["apple"],
        "surrogates": "🍎",
        "unicodeVersion": 6
    }, {
        "names": ["pear"],
        "surrogates": "🍐",
        "unicodeVersion": 6
    }, {
        "names": ["tangerine"],
        "surrogates": "🍊",
        "unicodeVersion": 6
    }, {
        "names": ["lemon"],
        "surrogates": "🍋",
        "unicodeVersion": 6
    }, {
        "names": ["banana"],
        "surrogates": "🍌",
        "unicodeVersion": 6
    }, {
        "names": ["watermelon"],
        "surrogates": "🍉",
        "unicodeVersion": 6
    }, {
        "names": ["grapes"],
        "surrogates": "🍇",
        "unicodeVersion": 6
    }, {
        "names": ["blueberries"],
        "surrogates": "🫐",
        "unicodeVersion": 13
    }, {
        "names": ["strawberry"],
        "surrogates": "🍓",
        "unicodeVersion": 6
    }, {
        "names": ["melon"],
        "surrogates": "🍈",
        "unicodeVersion": 6
    }, {
        "names": ["cherries"],
        "surrogates": "🍒",
        "unicodeVersion": 6
    }, {
        "names": ["peach"],
        "surrogates": "🍑",
        "unicodeVersion": 6
    }, {
        "names": ["mango"],
        "surrogates": "🥭",
        "unicodeVersion": 11
    }, {
        "names": ["pineapple"],
        "surrogates": "🍍",
        "unicodeVersion": 6
    }, {
        "names": ["coconut"],
        "surrogates": "🥥",
        "unicodeVersion": 10
    }, {
        "names": ["kiwi", "kiwifruit"],
        "surrogates": "🥝",
        "unicodeVersion": 9
    }, {
        "names": ["tomato"],
        "surrogates": "🍅",
        "unicodeVersion": 6
    }, {
        "names": ["eggplant"],
        "surrogates": "🍆",
        "unicodeVersion": 6
    }, {
        "names": ["avocado"],
        "surrogates": "🥑",
        "unicodeVersion": 9
    }, {
        "names": ["olive"],
        "surrogates": "🫒",
        "unicodeVersion": 13
    }, {
        "names": ["broccoli"],
        "surrogates": "🥦",
        "unicodeVersion": 10
    }, {
        "names": ["leafy_green"],
        "surrogates": "🥬",
        "unicodeVersion": 11
    }, {
        "names": ["bell_pepper"],
        "surrogates": "🫑",
        "unicodeVersion": 13
    }, {
        "names": ["cucumber"],
        "surrogates": "🥒",
        "unicodeVersion": 9
    }, {
        "names": ["hot_pepper"],
        "surrogates": "🌶️",
        "unicodeVersion": 7
    }, {
        "names": ["corn"],
        "surrogates": "🌽",
        "unicodeVersion": 6
    }, {
        "names": ["carrot"],
        "surrogates": "🥕",
        "unicodeVersion": 9
    }, {
        "names": ["garlic"],
        "surrogates": "🧄",
        "unicodeVersion": 12
    }, {
        "names": ["onion"],
        "surrogates": "🧅",
        "unicodeVersion": 12
    }, {
        "names": ["potato"],
        "surrogates": "🥔",
        "unicodeVersion": 9
    }, {
        "names": ["sweet_potato"],
        "surrogates": "🍠",
        "unicodeVersion": 6
    }, {
        "names": ["croissant"],
        "surrogates": "🥐",
        "unicodeVersion": 9
    }, {
        "names": ["bagel"],
        "surrogates": "🥯",
        "unicodeVersion": 11
    }, {
        "names": ["bread"],
        "surrogates": "🍞",
        "unicodeVersion": 6
    }, {
        "names": ["french_bread", "baguette_bread"],
        "surrogates": "🥖",
        "unicodeVersion": 9
    }, {
        "names": ["flatbread"],
        "surrogates": "🫓",
        "unicodeVersion": 13
    }, {
        "names": ["pretzel"],
        "surrogates": "🥨",
        "unicodeVersion": 10
    }, {
        "names": ["cheese", "cheese_wedge"],
        "surrogates": "🧀",
        "unicodeVersion": 8
    }, {
        "names": ["egg"],
        "surrogates": "🥚",
        "unicodeVersion": 9
    }, {
        "names": ["cooking"],
        "surrogates": "🍳",
        "unicodeVersion": 6
    }, {
        "names": ["butter"],
        "surrogates": "🧈",
        "unicodeVersion": 12
    }, {
        "names": ["pancakes"],
        "surrogates": "🥞",
        "unicodeVersion": 9
    }, {
        "names": ["waffle"],
        "surrogates": "🧇",
        "unicodeVersion": 12
    }, {
        "names": ["bacon"],
        "surrogates": "🥓",
        "unicodeVersion": 9
    }, {
        "names": ["cut_of_meat"],
        "surrogates": "🥩",
        "unicodeVersion": 10
    }, {
        "names": ["poultry_leg"],
        "surrogates": "🍗",
        "unicodeVersion": 6
    }, {
        "names": ["meat_on_bone"],
        "surrogates": "🍖",
        "unicodeVersion": 6
    }, {
        "names": ["hotdog", "hot_dog"],
        "surrogates": "🌭",
        "unicodeVersion": 8
    }, {
        "names": ["hamburger"],
        "surrogates": "🍔",
        "unicodeVersion": 6
    }, {
        "names": ["fries"],
        "surrogates": "🍟",
        "unicodeVersion": 6
    }, {
        "names": ["pizza"],
        "surrogates": "🍕",
        "unicodeVersion": 6
    }, {
        "names": ["sandwich"],
        "surrogates": "🥪",
        "unicodeVersion": 10
    }, {
        "names": ["stuffed_flatbread", "stuffed_pita"],
        "surrogates": "🥙",
        "unicodeVersion": 9
    }, {
        "names": ["falafel"],
        "surrogates": "🧆",
        "unicodeVersion": 12
    }, {
        "names": ["taco"],
        "surrogates": "🌮",
        "unicodeVersion": 8
    }, {
        "names": ["burrito"],
        "surrogates": "🌯",
        "unicodeVersion": 8
    }, {
        "names": ["tamale"],
        "surrogates": "🫔",
        "unicodeVersion": 13
    }, {
        "names": ["salad", "green_salad"],
        "surrogates": "🥗",
        "unicodeVersion": 9
    }, {
        "names": ["shallow_pan_of_food", "paella"],
        "surrogates": "🥘",
        "unicodeVersion": 9
    }, {
        "names": ["fondue"],
        "surrogates": "🫕",
        "unicodeVersion": 13
    }, {
        "names": ["canned_food"],
        "surrogates": "🥫",
        "unicodeVersion": 10
    }, {
        "names": ["spaghetti"],
        "surrogates": "🍝",
        "unicodeVersion": 6
    }, {
        "names": ["ramen"],
        "surrogates": "🍜",
        "unicodeVersion": 6
    }, {
        "names": ["stew"],
        "surrogates": "🍲",
        "unicodeVersion": 6
    }, {
        "names": ["curry"],
        "surrogates": "🍛",
        "unicodeVersion": 6
    }, {
        "names": ["sushi"],
        "surrogates": "🍣",
        "unicodeVersion": 6
    }, {
        "names": ["bento"],
        "surrogates": "🍱",
        "unicodeVersion": 6
    }, {
        "names": ["dumpling"],
        "surrogates": "🥟",
        "unicodeVersion": 10
    }, {
        "names": ["oyster"],
        "surrogates": "🦪",
        "unicodeVersion": 12
    }, {
        "names": ["fried_shrimp"],
        "surrogates": "🍤",
        "unicodeVersion": 6
    }, {
        "names": ["rice_ball"],
        "surrogates": "🍙",
        "unicodeVersion": 6
    }, {
        "names": ["rice"],
        "surrogates": "🍚",
        "unicodeVersion": 6
    }, {
        "names": ["rice_cracker"],
        "surrogates": "🍘",
        "unicodeVersion": 6
    }, {
        "names": ["fish_cake"],
        "surrogates": "🍥",
        "unicodeVersion": 6
    }, {
        "names": ["fortune_cookie"],
        "surrogates": "🥠",
        "unicodeVersion": 10
    }, {
        "names": ["moon_cake"],
        "surrogates": "🥮",
        "unicodeVersion": 11
    }, {
        "names": ["oden"],
        "surrogates": "🍢",
        "unicodeVersion": 6
    }, {
        "names": ["dango"],
        "surrogates": "🍡",
        "unicodeVersion": 6
    }, {
        "names": ["shaved_ice"],
        "surrogates": "🍧",
        "unicodeVersion": 6
    }, {
        "names": ["ice_cream"],
        "surrogates": "🍨",
        "unicodeVersion": 6
    }, {
        "names": ["icecream"],
        "surrogates": "🍦",
        "unicodeVersion": 6
    }, {
        "names": ["pie"],
        "surrogates": "🥧",
        "unicodeVersion": 10
    }, {
        "names": ["cupcake"],
        "surrogates": "🧁",
        "unicodeVersion": 11
    }, {
        "names": ["cake"],
        "surrogates": "🍰",
        "unicodeVersion": 6
    }, {
        "names": ["birthday"],
        "surrogates": "🎂",
        "unicodeVersion": 6
    }, {
        "names": ["custard", "pudding", "flan"],
        "surrogates": "🍮",
        "unicodeVersion": 6
    }, {
        "names": ["lollipop"],
        "surrogates": "🍭",
        "unicodeVersion": 6
    }, {
        "names": ["candy"],
        "surrogates": "🍬",
        "unicodeVersion": 6
    }, {
        "names": ["chocolate_bar"],
        "surrogates": "🍫",
        "unicodeVersion": 6
    }, {
        "names": ["popcorn"],
        "surrogates": "🍿",
        "unicodeVersion": 8
    }, {
        "names": ["doughnut"],
        "surrogates": "🍩",
        "unicodeVersion": 6
    }, {
        "names": ["cookie"],
        "surrogates": "🍪",
        "unicodeVersion": 6
    }, {
        "names": ["chestnut"],
        "surrogates": "🌰",
        "unicodeVersion": 6
    }, {
        "names": ["peanuts", "shelled_peanut"],
        "surrogates": "🥜",
        "unicodeVersion": 9
    }, {
        "names": ["honey_pot"],
        "surrogates": "🍯",
        "unicodeVersion": 6
    }, {
        "names": ["milk", "glass_of_milk"],
        "surrogates": "🥛",
        "unicodeVersion": 9
    }, {
        "names": ["baby_bottle"],
        "surrogates": "🍼",
        "unicodeVersion": 6
    }, {
        "names": ["coffee"],
        "surrogates": "☕",
        "unicodeVersion": 4
    }, {
        "names": ["tea"],
        "surrogates": "🍵",
        "unicodeVersion": 6
    }, {
        "names": ["teapot"],
        "surrogates": "🫖",
        "unicodeVersion": 13
    }, {
        "names": ["mate"],
        "surrogates": "🧉",
        "unicodeVersion": 12
    }, {
        "names": ["bubble_tea"],
        "surrogates": "🧋",
        "unicodeVersion": 13
    }, {
        "names": ["beverage_box"],
        "surrogates": "🧃",
        "unicodeVersion": 12
    }, {
        "names": ["cup_with_straw"],
        "surrogates": "🥤",
        "unicodeVersion": 10
    }, {
        "names": ["sake"],
        "surrogates": "🍶",
        "unicodeVersion": 6
    }, {
        "names": ["beer"],
        "surrogates": "🍺",
        "unicodeVersion": 6
    }, {
        "names": ["beers"],
        "surrogates": "🍻",
        "unicodeVersion": 6
    }, {
        "names": ["champagne_glass", "clinking_glass"],
        "surrogates": "🥂",
        "unicodeVersion": 9
    }, {
        "names": ["wine_glass"],
        "surrogates": "🍷",
        "unicodeVersion": 6
    }, {
        "names": ["tumbler_glass", "whisky"],
        "surrogates": "🥃",
        "unicodeVersion": 9
    }, {
        "names": ["cocktail"],
        "surrogates": "🍸",
        "unicodeVersion": 6
    }, {
        "names": ["tropical_drink"],
        "surrogates": "🍹",
        "unicodeVersion": 6
    }, {
        "names": ["champagne", "bottle_with_popping_cork"],
        "surrogates": "🍾",
        "unicodeVersion": 8
    }, {
        "names": ["ice_cube"],
        "surrogates": "🧊",
        "unicodeVersion": 12
    }, {
        "names": ["spoon"],
        "surrogates": "🥄",
        "unicodeVersion": 9
    }, {
        "names": ["fork_and_knife"],
        "surrogates": "🍴",
        "unicodeVersion": 6
    }, {
        "names": ["fork_knife_plate", "fork_and_knife_with_plate"],
        "surrogates": "🍽️",
        "unicodeVersion": 7
    }, {
        "names": ["bowl_with_spoon"],
        "surrogates": "🥣",
        "unicodeVersion": 10
    }, {
        "names": ["takeout_box"],
        "surrogates": "🥡",
        "unicodeVersion": 10
    }, {
        "names": ["chopsticks"],
        "surrogates": "🥢",
        "unicodeVersion": 10
    }, {
        "names": ["salt"],
        "surrogates": "🧂",
        "unicodeVersion": 11
    }],
    "activity": [{
        "names": ["soccer"],
        "surrogates": "⚽",
        "unicodeVersion": 5.2
    }, {
        "names": ["basketball"],
        "surrogates": "🏀",
        "unicodeVersion": 6
    }, {
        "names": ["football"],
        "surrogates": "🏈",
        "unicodeVersion": 6
    }, {
        "names": ["baseball"],
        "surrogates": "⚾",
        "unicodeVersion": 5.2
    }, {
        "names": ["softball"],
        "surrogates": "🥎",
        "unicodeVersion": 11
    }, {
        "names": ["tennis"],
        "surrogates": "🎾",
        "unicodeVersion": 6
    }, {
        "names": ["volleyball"],
        "surrogates": "🏐",
        "unicodeVersion": 8
    }, {
        "names": ["rugby_football"],
        "surrogates": "🏉",
        "unicodeVersion": 6
    }, {
        "names": ["flying_disc"],
        "surrogates": "🥏",
        "unicodeVersion": 11
    }, {
        "names": ["boomerang"],
        "surrogates": "🪃",
        "unicodeVersion": 13
    }, {
        "names": ["8ball"],
        "surrogates": "🎱",
        "unicodeVersion": 6
    }, {
        "names": ["yo_yo"],
        "surrogates": "🪀",
        "unicodeVersion": 12
    }, {
        "names": ["ping_pong", "table_tennis"],
        "surrogates": "🏓",
        "unicodeVersion": 8
    }, {
        "names": ["badminton"],
        "surrogates": "🏸",
        "unicodeVersion": 8
    }, {
        "names": ["hockey"],
        "surrogates": "🏒",
        "unicodeVersion": 8
    }, {
        "names": ["field_hockey"],
        "surrogates": "🏑",
        "unicodeVersion": 8
    }, {
        "names": ["lacrosse"],
        "surrogates": "🥍",
        "unicodeVersion": 11
    }, {
        "names": ["cricket_game", "cricket_bat_ball"],
        "surrogates": "🏏",
        "unicodeVersion": 8
    }, {
        "names": ["goal", "goal_net"],
        "surrogates": "🥅",
        "unicodeVersion": 9
    }, {
        "names": ["golf"],
        "surrogates": "⛳",
        "unicodeVersion": 5.2
    }, {
        "names": ["kite"],
        "surrogates": "🪁",
        "unicodeVersion": 12
    }, {
        "names": ["bow_and_arrow", "archery"],
        "surrogates": "🏹",
        "unicodeVersion": 8
    }, {
        "names": ["fishing_pole_and_fish"],
        "surrogates": "🎣",
        "unicodeVersion": 6
    }, {
        "names": ["diving_mask"],
        "surrogates": "🤿",
        "unicodeVersion": 12
    }, {
        "names": ["boxing_glove", "boxing_gloves"],
        "surrogates": "🥊",
        "unicodeVersion": 9
    }, {
        "names": ["martial_arts_uniform", "karate_uniform"],
        "surrogates": "🥋",
        "unicodeVersion": 9
    }, {
        "names": ["running_shirt_with_sash"],
        "surrogates": "🎽",
        "unicodeVersion": 6
    }, {
        "names": ["skateboard"],
        "surrogates": "🛹",
        "unicodeVersion": 11
    }, {
        "names": ["roller_skate"],
        "surrogates": "🛼",
        "unicodeVersion": 13
    }, {
        "names": ["sled"],
        "surrogates": "🛷",
        "unicodeVersion": 10
    }, {
        "names": ["ice_skate"],
        "surrogates": "⛸️",
        "unicodeVersion": 5.2
    }, {
        "names": ["curling_stone"],
        "surrogates": "🥌",
        "unicodeVersion": 10
    }, {
        "names": ["ski"],
        "surrogates": "🎿",
        "unicodeVersion": 6
    }, {
        "names": ["skier"],
        "surrogates": "⛷️",
        "unicodeVersion": 5.2
    }, {
        "names": ["snowboarder"],
        "surrogates": "🏂",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["snowboarder_tone1", "snowboarder_light_skin_tone"],
            "surrogates": "🏂🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["snowboarder_tone2", "snowboarder_medium_light_skin_tone"],
            "surrogates": "🏂🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["snowboarder_tone3", "snowboarder_medium_skin_tone"],
            "surrogates": "🏂🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["snowboarder_tone4", "snowboarder_medium_dark_skin_tone"],
            "surrogates": "🏂🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["snowboarder_tone5", "snowboarder_dark_skin_tone"],
            "surrogates": "🏂🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["parachute"],
        "surrogates": "🪂",
        "unicodeVersion": 12
    }, {
        "names": ["person_lifting_weights", "lifter", "weight_lifter"],
        "surrogates": "🏋️",
        "unicodeVersion": 7,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_lifting_weights_tone1", "lifter_tone1", "weight_lifter_tone1"],
            "surrogates": "🏋🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_lifting_weights_tone2", "lifter_tone2", "weight_lifter_tone2"],
            "surrogates": "🏋🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_lifting_weights_tone3", "lifter_tone3", "weight_lifter_tone3"],
            "surrogates": "🏋🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_lifting_weights_tone4", "lifter_tone4", "weight_lifter_tone4"],
            "surrogates": "🏋🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_lifting_weights_tone5", "lifter_tone5", "weight_lifter_tone5"],
            "surrogates": "🏋🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_lifting_weights"],
        "surrogates": "🏋️‍♀️",
        "unicodeVersion": 7,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_lifting_weights_tone1", "woman_lifting_weights_light_skin_tone"],
            "surrogates": "🏋🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_lifting_weights_tone2", "woman_lifting_weights_medium_light_skin_tone"],
            "surrogates": "🏋🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_lifting_weights_tone3", "woman_lifting_weights_medium_skin_tone"],
            "surrogates": "🏋🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_lifting_weights_tone4", "woman_lifting_weights_medium_dark_skin_tone"],
            "surrogates": "🏋🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_lifting_weights_tone5", "woman_lifting_weights_dark_skin_tone"],
            "surrogates": "🏋🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_lifting_weights"],
        "surrogates": "🏋️‍♂️",
        "unicodeVersion": 7,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_lifting_weights_tone1", "man_lifting_weights_light_skin_tone"],
            "surrogates": "🏋🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_lifting_weights_tone2", "man_lifting_weights_medium_light_skin_tone"],
            "surrogates": "🏋🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_lifting_weights_tone3", "man_lifting_weights_medium_skin_tone"],
            "surrogates": "🏋🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_lifting_weights_tone4", "man_lifting_weights_medium_dark_skin_tone"],
            "surrogates": "🏋🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_lifting_weights_tone5", "man_lifting_weights_dark_skin_tone"],
            "surrogates": "🏋🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["people_wrestling", "wrestlers", "wrestling"],
        "surrogates": "🤼",
        "unicodeVersion": 9
    }, {
        "names": ["women_wrestling"],
        "surrogates": "🤼‍♀️",
        "unicodeVersion": 9
    }, {
        "names": ["men_wrestling"],
        "surrogates": "🤼‍♂️",
        "unicodeVersion": 9
    }, {
        "names": ["person_doing_cartwheel", "cartwheel"],
        "surrogates": "🤸",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_doing_cartwheel_tone1", "cartwheel_tone1"],
            "surrogates": "🤸🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_doing_cartwheel_tone2", "cartwheel_tone2"],
            "surrogates": "🤸🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_doing_cartwheel_tone3", "cartwheel_tone3"],
            "surrogates": "🤸🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_doing_cartwheel_tone4", "cartwheel_tone4"],
            "surrogates": "🤸🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_doing_cartwheel_tone5", "cartwheel_tone5"],
            "surrogates": "🤸🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_cartwheeling"],
        "surrogates": "🤸‍♀️",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_cartwheeling_tone1", "woman_cartwheeling_light_skin_tone"],
            "surrogates": "🤸🏻‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_cartwheeling_tone2", "woman_cartwheeling_medium_light_skin_tone"],
            "surrogates": "🤸🏼‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_cartwheeling_tone3", "woman_cartwheeling_medium_skin_tone"],
            "surrogates": "🤸🏽‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_cartwheeling_tone4", "woman_cartwheeling_medium_dark_skin_tone"],
            "surrogates": "🤸🏾‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_cartwheeling_tone5", "woman_cartwheeling_dark_skin_tone"],
            "surrogates": "🤸🏿‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_cartwheeling"],
        "surrogates": "🤸‍♂️",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_cartwheeling_tone1", "man_cartwheeling_light_skin_tone"],
            "surrogates": "🤸🏻‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_cartwheeling_tone2", "man_cartwheeling_medium_light_skin_tone"],
            "surrogates": "🤸🏼‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_cartwheeling_tone3", "man_cartwheeling_medium_skin_tone"],
            "surrogates": "🤸🏽‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_cartwheeling_tone4", "man_cartwheeling_medium_dark_skin_tone"],
            "surrogates": "🤸🏾‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_cartwheeling_tone5", "man_cartwheeling_dark_skin_tone"],
            "surrogates": "🤸🏿‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_bouncing_ball", "basketball_player", "person_with_ball"],
        "surrogates": "⛹️",
        "unicodeVersion": 5.2,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_bouncing_ball_tone1", "basketball_player_tone1", "person_with_ball_tone1"],
            "surrogates": "⛹🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_bouncing_ball_tone2", "basketball_player_tone2", "person_with_ball_tone2"],
            "surrogates": "⛹🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_bouncing_ball_tone3", "basketball_player_tone3", "person_with_ball_tone3"],
            "surrogates": "⛹🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_bouncing_ball_tone4", "basketball_player_tone4", "person_with_ball_tone4"],
            "surrogates": "⛹🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_bouncing_ball_tone5", "basketball_player_tone5", "person_with_ball_tone5"],
            "surrogates": "⛹🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_bouncing_ball"],
        "surrogates": "⛹️‍♀️",
        "unicodeVersion": 5.2,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_bouncing_ball_tone1", "woman_bouncing_ball_light_skin_tone"],
            "surrogates": "⛹🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_bouncing_ball_tone2", "woman_bouncing_ball_medium_light_skin_tone"],
            "surrogates": "⛹🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_bouncing_ball_tone3", "woman_bouncing_ball_medium_skin_tone"],
            "surrogates": "⛹🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_bouncing_ball_tone4", "woman_bouncing_ball_medium_dark_skin_tone"],
            "surrogates": "⛹🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_bouncing_ball_tone5", "woman_bouncing_ball_dark_skin_tone"],
            "surrogates": "⛹🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_bouncing_ball"],
        "surrogates": "⛹️‍♂️",
        "unicodeVersion": 5.2,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_bouncing_ball_tone1", "man_bouncing_ball_light_skin_tone"],
            "surrogates": "⛹🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_bouncing_ball_tone2", "man_bouncing_ball_medium_light_skin_tone"],
            "surrogates": "⛹🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_bouncing_ball_tone3", "man_bouncing_ball_medium_skin_tone"],
            "surrogates": "⛹🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_bouncing_ball_tone4", "man_bouncing_ball_medium_dark_skin_tone"],
            "surrogates": "⛹🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_bouncing_ball_tone5", "man_bouncing_ball_dark_skin_tone"],
            "surrogates": "⛹🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_fencing", "fencer", "fencing"],
        "surrogates": "🤺",
        "unicodeVersion": 9
    }, {
        "names": ["person_playing_handball", "handball"],
        "surrogates": "🤾",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_playing_handball_tone1", "handball_tone1"],
            "surrogates": "🤾🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_playing_handball_tone2", "handball_tone2"],
            "surrogates": "🤾🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_playing_handball_tone3", "handball_tone3"],
            "surrogates": "🤾🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_playing_handball_tone4", "handball_tone4"],
            "surrogates": "🤾🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_playing_handball_tone5", "handball_tone5"],
            "surrogates": "🤾🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_playing_handball"],
        "surrogates": "🤾‍♀️",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_playing_handball_tone1", "woman_playing_handball_light_skin_tone"],
            "surrogates": "🤾🏻‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_playing_handball_tone2", "woman_playing_handball_medium_light_skin_tone"],
            "surrogates": "🤾🏼‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_playing_handball_tone3", "woman_playing_handball_medium_skin_tone"],
            "surrogates": "🤾🏽‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_playing_handball_tone4", "woman_playing_handball_medium_dark_skin_tone"],
            "surrogates": "🤾🏾‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_playing_handball_tone5", "woman_playing_handball_dark_skin_tone"],
            "surrogates": "🤾🏿‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_playing_handball"],
        "surrogates": "🤾‍♂️",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_playing_handball_tone1", "man_playing_handball_light_skin_tone"],
            "surrogates": "🤾🏻‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_playing_handball_tone2", "man_playing_handball_medium_light_skin_tone"],
            "surrogates": "🤾🏼‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_playing_handball_tone3", "man_playing_handball_medium_skin_tone"],
            "surrogates": "🤾🏽‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_playing_handball_tone4", "man_playing_handball_medium_dark_skin_tone"],
            "surrogates": "🤾🏾‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_playing_handball_tone5", "man_playing_handball_dark_skin_tone"],
            "surrogates": "🤾🏿‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_golfing", "golfer"],
        "surrogates": "🏌️",
        "unicodeVersion": 7,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_golfing_tone1", "person_golfing_light_skin_tone"],
            "surrogates": "🏌🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_golfing_tone2", "person_golfing_medium_light_skin_tone"],
            "surrogates": "🏌🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_golfing_tone3", "person_golfing_medium_skin_tone"],
            "surrogates": "🏌🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_golfing_tone4", "person_golfing_medium_dark_skin_tone"],
            "surrogates": "🏌🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_golfing_tone5", "person_golfing_dark_skin_tone"],
            "surrogates": "🏌🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_golfing"],
        "surrogates": "🏌️‍♀️",
        "unicodeVersion": 7,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_golfing_tone1", "woman_golfing_light_skin_tone"],
            "surrogates": "🏌🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_golfing_tone2", "woman_golfing_medium_light_skin_tone"],
            "surrogates": "🏌🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_golfing_tone3", "woman_golfing_medium_skin_tone"],
            "surrogates": "🏌🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_golfing_tone4", "woman_golfing_medium_dark_skin_tone"],
            "surrogates": "🏌🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_golfing_tone5", "woman_golfing_dark_skin_tone"],
            "surrogates": "🏌🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_golfing"],
        "surrogates": "🏌️‍♂️",
        "unicodeVersion": 7,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_golfing_tone1", "man_golfing_light_skin_tone"],
            "surrogates": "🏌🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_golfing_tone2", "man_golfing_medium_light_skin_tone"],
            "surrogates": "🏌🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_golfing_tone3", "man_golfing_medium_skin_tone"],
            "surrogates": "🏌🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_golfing_tone4", "man_golfing_medium_dark_skin_tone"],
            "surrogates": "🏌🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_golfing_tone5", "man_golfing_dark_skin_tone"],
            "surrogates": "🏌🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["horse_racing"],
        "surrogates": "🏇",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["horse_racing_tone1"],
            "surrogates": "🏇🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["horse_racing_tone2"],
            "surrogates": "🏇🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["horse_racing_tone3"],
            "surrogates": "🏇🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["horse_racing_tone4"],
            "surrogates": "🏇🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["horse_racing_tone5"],
            "surrogates": "🏇🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_in_lotus_position"],
        "surrogates": "🧘",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_in_lotus_position_tone1", "person_in_lotus_position_light_skin_tone"],
            "surrogates": "🧘🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_lotus_position_tone2", "person_in_lotus_position_medium_light_skin_tone"],
            "surrogates": "🧘🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_lotus_position_tone3", "person_in_lotus_position_medium_skin_tone"],
            "surrogates": "🧘🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_lotus_position_tone4", "person_in_lotus_position_medium_dark_skin_tone"],
            "surrogates": "🧘🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_lotus_position_tone5", "person_in_lotus_position_dark_skin_tone"],
            "surrogates": "🧘🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_in_lotus_position"],
        "surrogates": "🧘‍♀️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_in_lotus_position_tone1", "woman_in_lotus_position_light_skin_tone"],
            "surrogates": "🧘🏻‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_lotus_position_tone2", "woman_in_lotus_position_medium_light_skin_tone"],
            "surrogates": "🧘🏼‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_lotus_position_tone3", "woman_in_lotus_position_medium_skin_tone"],
            "surrogates": "🧘🏽‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_lotus_position_tone4", "woman_in_lotus_position_medium_dark_skin_tone"],
            "surrogates": "🧘🏾‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_in_lotus_position_tone5", "woman_in_lotus_position_dark_skin_tone"],
            "surrogates": "🧘🏿‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_in_lotus_position"],
        "surrogates": "🧘‍♂️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_in_lotus_position_tone1", "man_in_lotus_position_light_skin_tone"],
            "surrogates": "🧘🏻‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_lotus_position_tone2", "man_in_lotus_position_medium_light_skin_tone"],
            "surrogates": "🧘🏼‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_lotus_position_tone3", "man_in_lotus_position_medium_skin_tone"],
            "surrogates": "🧘🏽‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_lotus_position_tone4", "man_in_lotus_position_medium_dark_skin_tone"],
            "surrogates": "🧘🏾‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_in_lotus_position_tone5", "man_in_lotus_position_dark_skin_tone"],
            "surrogates": "🧘🏿‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_surfing", "surfer"],
        "surrogates": "🏄",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_surfing_tone1", "surfer_tone1"],
            "surrogates": "🏄🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_surfing_tone2", "surfer_tone2"],
            "surrogates": "🏄🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_surfing_tone3", "surfer_tone3"],
            "surrogates": "🏄🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_surfing_tone4", "surfer_tone4"],
            "surrogates": "🏄🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_surfing_tone5", "surfer_tone5"],
            "surrogates": "🏄🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_surfing"],
        "surrogates": "🏄‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_surfing_tone1", "woman_surfing_light_skin_tone"],
            "surrogates": "🏄🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_surfing_tone2", "woman_surfing_medium_light_skin_tone"],
            "surrogates": "🏄🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_surfing_tone3", "woman_surfing_medium_skin_tone"],
            "surrogates": "🏄🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_surfing_tone4", "woman_surfing_medium_dark_skin_tone"],
            "surrogates": "🏄🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_surfing_tone5", "woman_surfing_dark_skin_tone"],
            "surrogates": "🏄🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_surfing"],
        "surrogates": "🏄‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_surfing_tone1", "man_surfing_light_skin_tone"],
            "surrogates": "🏄🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_surfing_tone2", "man_surfing_medium_light_skin_tone"],
            "surrogates": "🏄🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_surfing_tone3", "man_surfing_medium_skin_tone"],
            "surrogates": "🏄🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_surfing_tone4", "man_surfing_medium_dark_skin_tone"],
            "surrogates": "🏄🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_surfing_tone5", "man_surfing_dark_skin_tone"],
            "surrogates": "🏄🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_swimming", "swimmer"],
        "surrogates": "🏊",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_swimming_tone1", "swimmer_tone1"],
            "surrogates": "🏊🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_swimming_tone2", "swimmer_tone2"],
            "surrogates": "🏊🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_swimming_tone3", "swimmer_tone3"],
            "surrogates": "🏊🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_swimming_tone4", "swimmer_tone4"],
            "surrogates": "🏊🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_swimming_tone5", "swimmer_tone5"],
            "surrogates": "🏊🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_swimming"],
        "surrogates": "🏊‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_swimming_tone1", "woman_swimming_light_skin_tone"],
            "surrogates": "🏊🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_swimming_tone2", "woman_swimming_medium_light_skin_tone"],
            "surrogates": "🏊🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_swimming_tone3", "woman_swimming_medium_skin_tone"],
            "surrogates": "🏊🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_swimming_tone4", "woman_swimming_medium_dark_skin_tone"],
            "surrogates": "🏊🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_swimming_tone5", "woman_swimming_dark_skin_tone"],
            "surrogates": "🏊🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_swimming"],
        "surrogates": "🏊‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_swimming_tone1", "man_swimming_light_skin_tone"],
            "surrogates": "🏊🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_swimming_tone2", "man_swimming_medium_light_skin_tone"],
            "surrogates": "🏊🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_swimming_tone3", "man_swimming_medium_skin_tone"],
            "surrogates": "🏊🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_swimming_tone4", "man_swimming_medium_dark_skin_tone"],
            "surrogates": "🏊🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_swimming_tone5", "man_swimming_dark_skin_tone"],
            "surrogates": "🏊🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_playing_water_polo", "water_polo"],
        "surrogates": "🤽",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_playing_water_polo_tone1", "water_polo_tone1"],
            "surrogates": "🤽🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_playing_water_polo_tone2", "water_polo_tone2"],
            "surrogates": "🤽🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_playing_water_polo_tone3", "water_polo_tone3"],
            "surrogates": "🤽🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_playing_water_polo_tone4", "water_polo_tone4"],
            "surrogates": "🤽🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_playing_water_polo_tone5", "water_polo_tone5"],
            "surrogates": "🤽🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_playing_water_polo"],
        "surrogates": "🤽‍♀️",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_playing_water_polo_tone1", "woman_playing_water_polo_light_skin_tone"],
            "surrogates": "🤽🏻‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_playing_water_polo_tone2", "woman_playing_water_polo_medium_light_skin_tone"],
            "surrogates": "🤽🏼‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_playing_water_polo_tone3", "woman_playing_water_polo_medium_skin_tone"],
            "surrogates": "🤽🏽‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_playing_water_polo_tone4", "woman_playing_water_polo_medium_dark_skin_tone"],
            "surrogates": "🤽🏾‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_playing_water_polo_tone5", "woman_playing_water_polo_dark_skin_tone"],
            "surrogates": "🤽🏿‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_playing_water_polo"],
        "surrogates": "🤽‍♂️",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_playing_water_polo_tone1", "man_playing_water_polo_light_skin_tone"],
            "surrogates": "🤽🏻‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_playing_water_polo_tone2", "man_playing_water_polo_medium_light_skin_tone"],
            "surrogates": "🤽🏼‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_playing_water_polo_tone3", "man_playing_water_polo_medium_skin_tone"],
            "surrogates": "🤽🏽‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_playing_water_polo_tone4", "man_playing_water_polo_medium_dark_skin_tone"],
            "surrogates": "🤽🏾‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_playing_water_polo_tone5", "man_playing_water_polo_dark_skin_tone"],
            "surrogates": "🤽🏿‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_rowing_boat", "rowboat"],
        "surrogates": "🚣",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_rowing_boat_tone1", "rowboat_tone1"],
            "surrogates": "🚣🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_rowing_boat_tone2", "rowboat_tone2"],
            "surrogates": "🚣🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_rowing_boat_tone3", "rowboat_tone3"],
            "surrogates": "🚣🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_rowing_boat_tone4", "rowboat_tone4"],
            "surrogates": "🚣🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_rowing_boat_tone5", "rowboat_tone5"],
            "surrogates": "🚣🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_rowing_boat"],
        "surrogates": "🚣‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_rowing_boat_tone1", "woman_rowing_boat_light_skin_tone"],
            "surrogates": "🚣🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_rowing_boat_tone2", "woman_rowing_boat_medium_light_skin_tone"],
            "surrogates": "🚣🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_rowing_boat_tone3", "woman_rowing_boat_medium_skin_tone"],
            "surrogates": "🚣🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_rowing_boat_tone4", "woman_rowing_boat_medium_dark_skin_tone"],
            "surrogates": "🚣🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_rowing_boat_tone5", "woman_rowing_boat_dark_skin_tone"],
            "surrogates": "🚣🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_rowing_boat"],
        "surrogates": "🚣‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_rowing_boat_tone1", "man_rowing_boat_light_skin_tone"],
            "surrogates": "🚣🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_rowing_boat_tone2", "man_rowing_boat_medium_light_skin_tone"],
            "surrogates": "🚣🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_rowing_boat_tone3", "man_rowing_boat_medium_skin_tone"],
            "surrogates": "🚣🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_rowing_boat_tone4", "man_rowing_boat_medium_dark_skin_tone"],
            "surrogates": "🚣🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_rowing_boat_tone5", "man_rowing_boat_dark_skin_tone"],
            "surrogates": "🚣🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_climbing"],
        "surrogates": "🧗",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_climbing_tone1", "person_climbing_light_skin_tone"],
            "surrogates": "🧗🏻",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_climbing_tone2", "person_climbing_medium_light_skin_tone"],
            "surrogates": "🧗🏼",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_climbing_tone3", "person_climbing_medium_skin_tone"],
            "surrogates": "🧗🏽",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_climbing_tone4", "person_climbing_medium_dark_skin_tone"],
            "surrogates": "🧗🏾",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_climbing_tone5", "person_climbing_dark_skin_tone"],
            "surrogates": "🧗🏿",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_climbing"],
        "surrogates": "🧗‍♀️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_climbing_tone1", "woman_climbing_light_skin_tone"],
            "surrogates": "🧗🏻‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_climbing_tone2", "woman_climbing_medium_light_skin_tone"],
            "surrogates": "🧗🏼‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_climbing_tone3", "woman_climbing_medium_skin_tone"],
            "surrogates": "🧗🏽‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_climbing_tone4", "woman_climbing_medium_dark_skin_tone"],
            "surrogates": "🧗🏾‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_climbing_tone5", "woman_climbing_dark_skin_tone"],
            "surrogates": "🧗🏿‍♀️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_climbing"],
        "surrogates": "🧗‍♂️",
        "unicodeVersion": 10,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_climbing_tone1", "man_climbing_light_skin_tone"],
            "surrogates": "🧗🏻‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_climbing_tone2", "man_climbing_medium_light_skin_tone"],
            "surrogates": "🧗🏼‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_climbing_tone3", "man_climbing_medium_skin_tone"],
            "surrogates": "🧗🏽‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_climbing_tone4", "man_climbing_medium_dark_skin_tone"],
            "surrogates": "🧗🏾‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_climbing_tone5", "man_climbing_dark_skin_tone"],
            "surrogates": "🧗🏿‍♂️",
            "unicodeVersion": 10,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_mountain_biking", "mountain_bicyclist"],
        "surrogates": "🚵",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_mountain_biking_tone1", "mountain_bicyclist_tone1"],
            "surrogates": "🚵🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_mountain_biking_tone2", "mountain_bicyclist_tone2"],
            "surrogates": "🚵🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_mountain_biking_tone3", "mountain_bicyclist_tone3"],
            "surrogates": "🚵🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_mountain_biking_tone4", "mountain_bicyclist_tone4"],
            "surrogates": "🚵🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_mountain_biking_tone5", "mountain_bicyclist_tone5"],
            "surrogates": "🚵🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_mountain_biking"],
        "surrogates": "🚵‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_mountain_biking_tone1", "woman_mountain_biking_light_skin_tone"],
            "surrogates": "🚵🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_mountain_biking_tone2", "woman_mountain_biking_medium_light_skin_tone"],
            "surrogates": "🚵🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_mountain_biking_tone3", "woman_mountain_biking_medium_skin_tone"],
            "surrogates": "🚵🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_mountain_biking_tone4", "woman_mountain_biking_medium_dark_skin_tone"],
            "surrogates": "🚵🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_mountain_biking_tone5", "woman_mountain_biking_dark_skin_tone"],
            "surrogates": "🚵🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_mountain_biking"],
        "surrogates": "🚵‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_mountain_biking_tone1", "man_mountain_biking_light_skin_tone"],
            "surrogates": "🚵🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_mountain_biking_tone2", "man_mountain_biking_medium_light_skin_tone"],
            "surrogates": "🚵🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_mountain_biking_tone3", "man_mountain_biking_medium_skin_tone"],
            "surrogates": "🚵🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_mountain_biking_tone4", "man_mountain_biking_medium_dark_skin_tone"],
            "surrogates": "🚵🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_mountain_biking_tone5", "man_mountain_biking_dark_skin_tone"],
            "surrogates": "🚵🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["person_biking", "bicyclist"],
        "surrogates": "🚴",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_biking_tone1", "bicyclist_tone1"],
            "surrogates": "🚴🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_biking_tone2", "bicyclist_tone2"],
            "surrogates": "🚴🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_biking_tone3", "bicyclist_tone3"],
            "surrogates": "🚴🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_biking_tone4", "bicyclist_tone4"],
            "surrogates": "🚴🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_biking_tone5", "bicyclist_tone5"],
            "surrogates": "🚴🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_biking"],
        "surrogates": "🚴‍♀️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_biking_tone1", "woman_biking_light_skin_tone"],
            "surrogates": "🚴🏻‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_biking_tone2", "woman_biking_medium_light_skin_tone"],
            "surrogates": "🚴🏼‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_biking_tone3", "woman_biking_medium_skin_tone"],
            "surrogates": "🚴🏽‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_biking_tone4", "woman_biking_medium_dark_skin_tone"],
            "surrogates": "🚴🏾‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_biking_tone5", "woman_biking_dark_skin_tone"],
            "surrogates": "🚴🏿‍♀️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_biking"],
        "surrogates": "🚴‍♂️",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_biking_tone1", "man_biking_light_skin_tone"],
            "surrogates": "🚴🏻‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_biking_tone2", "man_biking_medium_light_skin_tone"],
            "surrogates": "🚴🏼‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_biking_tone3", "man_biking_medium_skin_tone"],
            "surrogates": "🚴🏽‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_biking_tone4", "man_biking_medium_dark_skin_tone"],
            "surrogates": "🚴🏾‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_biking_tone5", "man_biking_dark_skin_tone"],
            "surrogates": "🚴🏿‍♂️",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["trophy"],
        "surrogates": "🏆",
        "unicodeVersion": 6
    }, {
        "names": ["first_place", "first_place_medal"],
        "surrogates": "🥇",
        "unicodeVersion": 9
    }, {
        "names": ["second_place", "second_place_medal"],
        "surrogates": "🥈",
        "unicodeVersion": 9
    }, {
        "names": ["third_place", "third_place_medal"],
        "surrogates": "🥉",
        "unicodeVersion": 9
    }, {
        "names": ["medal", "sports_medal"],
        "surrogates": "🏅",
        "unicodeVersion": 7
    }, {
        "names": ["military_medal"],
        "surrogates": "🎖️",
        "unicodeVersion": 7
    }, {
        "names": ["rosette"],
        "surrogates": "🏵️",
        "unicodeVersion": 7
    }, {
        "names": ["reminder_ribbon"],
        "surrogates": "🎗️",
        "unicodeVersion": 7
    }, {
        "names": ["ticket"],
        "surrogates": "🎫",
        "unicodeVersion": 6
    }, {
        "names": ["tickets", "admission_tickets"],
        "surrogates": "🎟️",
        "unicodeVersion": 7
    }, {
        "names": ["circus_tent"],
        "surrogates": "🎪",
        "unicodeVersion": 6
    }, {
        "names": ["person_juggling", "juggling", "juggler"],
        "surrogates": "🤹",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_juggling_tone1", "juggling_tone1", "juggler_tone1"],
            "surrogates": "🤹🏻",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_juggling_tone2", "juggling_tone2", "juggler_tone2"],
            "surrogates": "🤹🏼",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_juggling_tone3", "juggling_tone3", "juggler_tone3"],
            "surrogates": "🤹🏽",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_juggling_tone4", "juggling_tone4", "juggler_tone4"],
            "surrogates": "🤹🏾",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_juggling_tone5", "juggling_tone5", "juggler_tone5"],
            "surrogates": "🤹🏿",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["woman_juggling"],
        "surrogates": "🤹‍♀️",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["woman_juggling_tone1", "woman_juggling_light_skin_tone"],
            "surrogates": "🤹🏻‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_juggling_tone2", "woman_juggling_medium_light_skin_tone"],
            "surrogates": "🤹🏼‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_juggling_tone3", "woman_juggling_medium_skin_tone"],
            "surrogates": "🤹🏽‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_juggling_tone4", "woman_juggling_medium_dark_skin_tone"],
            "surrogates": "🤹🏾‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["woman_juggling_tone5", "woman_juggling_dark_skin_tone"],
            "surrogates": "🤹🏿‍♀️",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["man_juggling"],
        "surrogates": "🤹‍♂️",
        "unicodeVersion": 9,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["man_juggling_tone1", "man_juggling_light_skin_tone"],
            "surrogates": "🤹🏻‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["man_juggling_tone2", "man_juggling_medium_light_skin_tone"],
            "surrogates": "🤹🏼‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["man_juggling_tone3", "man_juggling_medium_skin_tone"],
            "surrogates": "🤹🏽‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["man_juggling_tone4", "man_juggling_medium_dark_skin_tone"],
            "surrogates": "🤹🏾‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["man_juggling_tone5", "man_juggling_dark_skin_tone"],
            "surrogates": "🤹🏿‍♂️",
            "unicodeVersion": 9,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["performing_arts"],
        "surrogates": "🎭",
        "unicodeVersion": 6
    }, {
        "names": ["ballet_shoes"],
        "surrogates": "🩰",
        "unicodeVersion": 12
    }, {
        "names": ["art"],
        "surrogates": "🎨",
        "unicodeVersion": 6
    }, {
        "names": ["clapper"],
        "surrogates": "🎬",
        "unicodeVersion": 6
    }, {
        "names": ["microphone"],
        "surrogates": "🎤",
        "unicodeVersion": 6
    }, {
        "names": ["headphones"],
        "surrogates": "🎧",
        "unicodeVersion": 6
    }, {
        "names": ["musical_score"],
        "surrogates": "🎼",
        "unicodeVersion": 6
    }, {
        "names": ["musical_keyboard"],
        "surrogates": "🎹",
        "unicodeVersion": 6
    }, {
        "names": ["drum", "drum_with_drumsticks"],
        "surrogates": "🥁",
        "unicodeVersion": 9
    }, {
        "names": ["long_drum"],
        "surrogates": "🪘",
        "unicodeVersion": 13
    }, {
        "names": ["saxophone"],
        "surrogates": "🎷",
        "unicodeVersion": 6
    }, {
        "names": ["trumpet"],
        "surrogates": "🎺",
        "unicodeVersion": 6
    }, {
        "names": ["guitar"],
        "surrogates": "🎸",
        "unicodeVersion": 6
    }, {
        "names": ["banjo"],
        "surrogates": "🪕",
        "unicodeVersion": 12
    }, {
        "names": ["violin"],
        "surrogates": "🎻",
        "unicodeVersion": 6
    }, {
        "names": ["accordion"],
        "surrogates": "🪗",
        "unicodeVersion": 13
    }, {
        "names": ["game_die"],
        "surrogates": "🎲",
        "unicodeVersion": 6
    }, {
        "names": ["chess_pawn"],
        "surrogates": "♟️",
        "unicodeVersion": 1.1
    }, {
        "names": ["dart"],
        "surrogates": "🎯",
        "unicodeVersion": 6
    }, {
        "names": ["bowling"],
        "surrogates": "🎳",
        "unicodeVersion": 6
    }, {
        "names": ["video_game"],
        "surrogates": "🎮",
        "unicodeVersion": 6
    }, {
        "names": ["slot_machine"],
        "surrogates": "🎰",
        "unicodeVersion": 6
    }, {
        "names": ["jigsaw"],
        "surrogates": "🧩",
        "unicodeVersion": 11
    }],
    "travel": [{
        "names": ["red_car"],
        "surrogates": "🚗",
        "unicodeVersion": 6
    }, {
        "names": ["taxi"],
        "surrogates": "🚕",
        "unicodeVersion": 6
    }, {
        "names": ["blue_car"],
        "surrogates": "🚙",
        "unicodeVersion": 6
    }, {
        "names": ["pickup_truck"],
        "surrogates": "🛻",
        "unicodeVersion": 13
    }, {
        "names": ["bus"],
        "surrogates": "🚌",
        "unicodeVersion": 6
    }, {
        "names": ["trolleybus"],
        "surrogates": "🚎",
        "unicodeVersion": 6
    }, {
        "names": ["race_car", "racing_car"],
        "surrogates": "🏎️",
        "unicodeVersion": 7
    }, {
        "names": ["police_car"],
        "surrogates": "🚓",
        "unicodeVersion": 6
    }, {
        "names": ["ambulance"],
        "surrogates": "🚑",
        "unicodeVersion": 6
    }, {
        "names": ["fire_engine"],
        "surrogates": "🚒",
        "unicodeVersion": 6
    }, {
        "names": ["minibus"],
        "surrogates": "🚐",
        "unicodeVersion": 6
    }, {
        "names": ["truck"],
        "surrogates": "🚚",
        "unicodeVersion": 6
    }, {
        "names": ["articulated_lorry"],
        "surrogates": "🚛",
        "unicodeVersion": 6
    }, {
        "names": ["tractor"],
        "surrogates": "🚜",
        "unicodeVersion": 6
    }, {
        "names": ["probing_cane"],
        "surrogates": "🦯",
        "unicodeVersion": 12
    }, {
        "names": ["manual_wheelchair"],
        "surrogates": "🦽",
        "unicodeVersion": 12
    }, {
        "names": ["motorized_wheelchair"],
        "surrogates": "🦼",
        "unicodeVersion": 12
    }, {
        "names": ["scooter"],
        "surrogates": "🛴",
        "unicodeVersion": 9
    }, {
        "names": ["bike"],
        "surrogates": "🚲",
        "unicodeVersion": 6
    }, {
        "names": ["motor_scooter", "motorbike"],
        "surrogates": "🛵",
        "unicodeVersion": 9
    }, {
        "names": ["motorcycle", "racing_motorcycle"],
        "surrogates": "🏍️",
        "unicodeVersion": 7
    }, {
        "names": ["auto_rickshaw"],
        "surrogates": "🛺",
        "unicodeVersion": 12
    }, {
        "names": ["rotating_light"],
        "surrogates": "🚨",
        "unicodeVersion": 6
    }, {
        "names": ["oncoming_police_car"],
        "surrogates": "🚔",
        "unicodeVersion": 6
    }, {
        "names": ["oncoming_bus"],
        "surrogates": "🚍",
        "unicodeVersion": 6
    }, {
        "names": ["oncoming_automobile"],
        "surrogates": "🚘",
        "unicodeVersion": 6
    }, {
        "names": ["oncoming_taxi"],
        "surrogates": "🚖",
        "unicodeVersion": 6
    }, {
        "names": ["aerial_tramway"],
        "surrogates": "🚡",
        "unicodeVersion": 6
    }, {
        "names": ["mountain_cableway"],
        "surrogates": "🚠",
        "unicodeVersion": 6
    }, {
        "names": ["suspension_railway"],
        "surrogates": "🚟",
        "unicodeVersion": 6
    }, {
        "names": ["railway_car"],
        "surrogates": "🚃",
        "unicodeVersion": 6
    }, {
        "names": ["train"],
        "surrogates": "🚋",
        "unicodeVersion": 6
    }, {
        "names": ["mountain_railway"],
        "surrogates": "🚞",
        "unicodeVersion": 6
    }, {
        "names": ["monorail"],
        "surrogates": "🚝",
        "unicodeVersion": 6
    }, {
        "names": ["bullettrain_side"],
        "surrogates": "🚄",
        "unicodeVersion": 6
    }, {
        "names": ["bullettrain_front"],
        "surrogates": "🚅",
        "unicodeVersion": 6
    }, {
        "names": ["light_rail"],
        "surrogates": "🚈",
        "unicodeVersion": 6
    }, {
        "names": ["steam_locomotive"],
        "surrogates": "🚂",
        "unicodeVersion": 6
    }, {
        "names": ["train2"],
        "surrogates": "🚆",
        "unicodeVersion": 6
    }, {
        "names": ["metro"],
        "surrogates": "🚇",
        "unicodeVersion": 6
    }, {
        "names": ["tram"],
        "surrogates": "🚊",
        "unicodeVersion": 6
    }, {
        "names": ["station"],
        "surrogates": "🚉",
        "unicodeVersion": 6
    }, {
        "names": ["airplane"],
        "surrogates": "✈️",
        "unicodeVersion": 1.1
    }, {
        "names": ["airplane_departure"],
        "surrogates": "🛫",
        "unicodeVersion": 7
    }, {
        "names": ["airplane_arriving"],
        "surrogates": "🛬",
        "unicodeVersion": 7
    }, {
        "names": ["airplane_small", "small_airplane"],
        "surrogates": "🛩️",
        "unicodeVersion": 7
    }, {
        "names": ["seat"],
        "surrogates": "💺",
        "unicodeVersion": 6
    }, {
        "names": ["satellite_orbital"],
        "surrogates": "🛰️",
        "unicodeVersion": 7
    }, {
        "names": ["rocket"],
        "surrogates": "🚀",
        "unicodeVersion": 6
    }, {
        "names": ["flying_saucer"],
        "surrogates": "🛸",
        "unicodeVersion": 10
    }, {
        "names": ["helicopter"],
        "surrogates": "🚁",
        "unicodeVersion": 6
    }, {
        "names": ["canoe", "kayak"],
        "surrogates": "🛶",
        "unicodeVersion": 9
    }, {
        "names": ["sailboat"],
        "surrogates": "⛵",
        "unicodeVersion": 5.2
    }, {
        "names": ["speedboat"],
        "surrogates": "🚤",
        "unicodeVersion": 6
    }, {
        "names": ["motorboat"],
        "surrogates": "🛥️",
        "unicodeVersion": 7
    }, {
        "names": ["cruise_ship", "passenger_ship"],
        "surrogates": "🛳️",
        "unicodeVersion": 7
    }, {
        "names": ["ferry"],
        "surrogates": "⛴️",
        "unicodeVersion": 5.2
    }, {
        "names": ["ship"],
        "surrogates": "🚢",
        "unicodeVersion": 6
    }, {
        "names": ["anchor"],
        "surrogates": "⚓",
        "unicodeVersion": 4.1
    }, {
        "names": ["fuelpump"],
        "surrogates": "⛽",
        "unicodeVersion": 5.2
    }, {
        "names": ["construction"],
        "surrogates": "🚧",
        "unicodeVersion": 6
    }, {
        "names": ["vertical_traffic_light"],
        "surrogates": "🚦",
        "unicodeVersion": 6
    }, {
        "names": ["traffic_light"],
        "surrogates": "🚥",
        "unicodeVersion": 6
    }, {
        "names": ["busstop"],
        "surrogates": "🚏",
        "unicodeVersion": 6
    }, {
        "names": ["map", "world_map"],
        "surrogates": "🗺️",
        "unicodeVersion": 7
    }, {
        "names": ["moyai"],
        "surrogates": "🗿",
        "unicodeVersion": 6
    }, {
        "names": ["statue_of_liberty"],
        "surrogates": "🗽",
        "unicodeVersion": 6
    }, {
        "names": ["tokyo_tower"],
        "surrogates": "🗼",
        "unicodeVersion": 6
    }, {
        "names": ["european_castle"],
        "surrogates": "🏰",
        "unicodeVersion": 6
    }, {
        "names": ["japanese_castle"],
        "surrogates": "🏯",
        "unicodeVersion": 6
    }, {
        "names": ["stadium"],
        "surrogates": "🏟️",
        "unicodeVersion": 7
    }, {
        "names": ["ferris_wheel"],
        "surrogates": "🎡",
        "unicodeVersion": 6
    }, {
        "names": ["roller_coaster"],
        "surrogates": "🎢",
        "unicodeVersion": 6
    }, {
        "names": ["carousel_horse"],
        "surrogates": "🎠",
        "unicodeVersion": 6
    }, {
        "names": ["fountain"],
        "surrogates": "⛲",
        "unicodeVersion": 5.2
    }, {
        "names": ["beach_umbrella", "umbrella_on_ground"],
        "surrogates": "⛱️",
        "unicodeVersion": 5.2
    }, {
        "names": ["beach", "beach_with_umbrella"],
        "surrogates": "🏖️",
        "unicodeVersion": 7
    }, {
        "names": ["island", "desert_island"],
        "surrogates": "🏝️",
        "unicodeVersion": 7
    }, {
        "names": ["desert"],
        "surrogates": "🏜️",
        "unicodeVersion": 7
    }, {
        "names": ["volcano"],
        "surrogates": "🌋",
        "unicodeVersion": 6
    }, {
        "names": ["mountain"],
        "surrogates": "⛰️",
        "unicodeVersion": 5.2
    }, {
        "names": ["mountain_snow", "snow_capped_mountain"],
        "surrogates": "🏔️",
        "unicodeVersion": 7
    }, {
        "names": ["mount_fuji"],
        "surrogates": "🗻",
        "unicodeVersion": 6
    }, {
        "names": ["camping"],
        "surrogates": "🏕️",
        "unicodeVersion": 7
    }, {
        "names": ["tent"],
        "surrogates": "⛺",
        "unicodeVersion": 5.2
    }, {
        "names": ["house"],
        "surrogates": "🏠",
        "unicodeVersion": 6
    }, {
        "names": ["house_with_garden"],
        "surrogates": "🏡",
        "unicodeVersion": 6
    }, {
        "names": ["homes", "house_buildings"],
        "surrogates": "🏘️",
        "unicodeVersion": 7
    }, {
        "names": ["house_abandoned", "derelict_house_building"],
        "surrogates": "🏚️",
        "unicodeVersion": 7
    }, {
        "names": ["hut"],
        "surrogates": "🛖",
        "unicodeVersion": 13
    }, {
        "names": ["construction_site", "building_construction"],
        "surrogates": "🏗️",
        "unicodeVersion": 7
    }, {
        "names": ["factory"],
        "surrogates": "🏭",
        "unicodeVersion": 6
    }, {
        "names": ["office"],
        "surrogates": "🏢",
        "unicodeVersion": 6
    }, {
        "names": ["department_store"],
        "surrogates": "🏬",
        "unicodeVersion": 6
    }, {
        "names": ["post_office"],
        "surrogates": "🏣",
        "unicodeVersion": 6
    }, {
        "names": ["european_post_office"],
        "surrogates": "🏤",
        "unicodeVersion": 6
    }, {
        "names": ["hospital"],
        "surrogates": "🏥",
        "unicodeVersion": 6
    }, {
        "names": ["bank"],
        "surrogates": "🏦",
        "unicodeVersion": 6
    }, {
        "names": ["hotel"],
        "surrogates": "🏨",
        "unicodeVersion": 6
    }, {
        "names": ["convenience_store"],
        "surrogates": "🏪",
        "unicodeVersion": 6
    }, {
        "names": ["school"],
        "surrogates": "🏫",
        "unicodeVersion": 6
    }, {
        "names": ["love_hotel"],
        "surrogates": "🏩",
        "unicodeVersion": 6
    }, {
        "names": ["wedding"],
        "surrogates": "💒",
        "unicodeVersion": 6
    }, {
        "names": ["classical_building"],
        "surrogates": "🏛️",
        "unicodeVersion": 7
    }, {
        "names": ["church"],
        "surrogates": "⛪",
        "unicodeVersion": 5.2
    }, {
        "names": ["mosque"],
        "surrogates": "🕌",
        "unicodeVersion": 8
    }, {
        "names": ["synagogue"],
        "surrogates": "🕍",
        "unicodeVersion": 8
    }, {
        "names": ["hindu_temple"],
        "surrogates": "🛕",
        "unicodeVersion": 12
    }, {
        "names": ["kaaba"],
        "surrogates": "🕋",
        "unicodeVersion": 8
    }, {
        "names": ["shinto_shrine"],
        "surrogates": "⛩️",
        "unicodeVersion": 5.2
    }, {
        "names": ["railway_track", "railroad_track"],
        "surrogates": "🛤️",
        "unicodeVersion": 7
    }, {
        "names": ["motorway"],
        "surrogates": "🛣️",
        "unicodeVersion": 7
    }, {
        "names": ["japan"],
        "surrogates": "🗾",
        "unicodeVersion": 6
    }, {
        "names": ["rice_scene"],
        "surrogates": "🎑",
        "unicodeVersion": 6
    }, {
        "names": ["park", "national_park"],
        "surrogates": "🏞️",
        "unicodeVersion": 7
    }, {
        "names": ["sunrise"],
        "surrogates": "🌅",
        "unicodeVersion": 6
    }, {
        "names": ["sunrise_over_mountains"],
        "surrogates": "🌄",
        "unicodeVersion": 6
    }, {
        "names": ["stars"],
        "surrogates": "🌠",
        "unicodeVersion": 6
    }, {
        "names": ["sparkler"],
        "surrogates": "🎇",
        "unicodeVersion": 6
    }, {
        "names": ["fireworks"],
        "surrogates": "🎆",
        "unicodeVersion": 6
    }, {
        "names": ["city_sunset", "city_sunrise"],
        "surrogates": "🌇",
        "unicodeVersion": 6
    }, {
        "names": ["city_dusk"],
        "surrogates": "🌆",
        "unicodeVersion": 6
    }, {
        "names": ["cityscape"],
        "surrogates": "🏙️",
        "unicodeVersion": 7
    }, {
        "names": ["night_with_stars"],
        "surrogates": "🌃",
        "unicodeVersion": 6
    }, {
        "names": ["milky_way"],
        "surrogates": "🌌",
        "unicodeVersion": 6
    }, {
        "names": ["bridge_at_night"],
        "surrogates": "🌉",
        "unicodeVersion": 6
    }, {
        "names": ["foggy"],
        "surrogates": "🌁",
        "unicodeVersion": 6
    }],
    "objects": [{
        "names": ["watch"],
        "surrogates": "⌚",
        "unicodeVersion": 1.1
    }, {
        "names": ["mobile_phone", "iphone"],
        "surrogates": "📱",
        "unicodeVersion": 6
    }, {
        "names": ["calling"],
        "surrogates": "📲",
        "unicodeVersion": 6
    }, {
        "names": ["computer"],
        "surrogates": "💻",
        "unicodeVersion": 6
    }, {
        "names": ["keyboard"],
        "surrogates": "⌨️",
        "unicodeVersion": 1.1
    }, {
        "names": ["desktop", "desktop_computer"],
        "surrogates": "🖥️",
        "unicodeVersion": 7
    }, {
        "names": ["printer"],
        "surrogates": "🖨️",
        "unicodeVersion": 7
    }, {
        "names": ["mouse_three_button", "three_button_mouse"],
        "surrogates": "🖱️",
        "unicodeVersion": 7
    }, {
        "names": ["trackball"],
        "surrogates": "🖲️",
        "unicodeVersion": 7
    }, {
        "names": ["joystick"],
        "surrogates": "🕹️",
        "unicodeVersion": 7
    }, {
        "names": ["compression"],
        "surrogates": "🗜️",
        "unicodeVersion": 7
    }, {
        "names": ["minidisc"],
        "surrogates": "💽",
        "unicodeVersion": 6
    }, {
        "names": ["floppy_disk"],
        "surrogates": "💾",
        "unicodeVersion": 6
    }, {
        "names": ["cd"],
        "surrogates": "💿",
        "unicodeVersion": 6
    }, {
        "names": ["dvd"],
        "surrogates": "📀",
        "unicodeVersion": 6
    }, {
        "names": ["vhs"],
        "surrogates": "📼",
        "unicodeVersion": 6
    }, {
        "names": ["camera"],
        "surrogates": "📷",
        "unicodeVersion": 6
    }, {
        "names": ["camera_with_flash"],
        "surrogates": "📸",
        "unicodeVersion": 7
    }, {
        "names": ["video_camera"],
        "surrogates": "📹",
        "unicodeVersion": 6
    }, {
        "names": ["movie_camera"],
        "surrogates": "🎥",
        "unicodeVersion": 6
    }, {
        "names": ["projector", "film_projector"],
        "surrogates": "📽️",
        "unicodeVersion": 7
    }, {
        "names": ["film_frames"],
        "surrogates": "🎞️",
        "unicodeVersion": 7
    }, {
        "names": ["telephone_receiver"],
        "surrogates": "📞",
        "unicodeVersion": 6
    }, {
        "names": ["telephone"],
        "surrogates": "☎️",
        "unicodeVersion": 1.1
    }, {
        "names": ["pager"],
        "surrogates": "📟",
        "unicodeVersion": 6
    }, {
        "names": ["fax"],
        "surrogates": "📠",
        "unicodeVersion": 6
    }, {
        "names": ["tv"],
        "surrogates": "📺",
        "unicodeVersion": 6
    }, {
        "names": ["radio"],
        "surrogates": "📻",
        "unicodeVersion": 6
    }, {
        "names": ["microphone2", "studio_microphone"],
        "surrogates": "🎙️",
        "unicodeVersion": 7
    }, {
        "names": ["level_slider"],
        "surrogates": "🎚️",
        "unicodeVersion": 7
    }, {
        "names": ["control_knobs"],
        "surrogates": "🎛️",
        "unicodeVersion": 7
    }, {
        "names": ["compass"],
        "surrogates": "🧭",
        "unicodeVersion": 11
    }, {
        "names": ["stopwatch"],
        "surrogates": "⏱️",
        "unicodeVersion": 6
    }, {
        "names": ["timer", "timer_clock"],
        "surrogates": "⏲️",
        "unicodeVersion": 6
    }, {
        "names": ["alarm_clock"],
        "surrogates": "⏰",
        "unicodeVersion": 6
    }, {
        "names": ["clock", "mantlepiece_clock"],
        "surrogates": "🕰️",
        "unicodeVersion": 7
    }, {
        "names": ["hourglass"],
        "surrogates": "⌛",
        "unicodeVersion": 1.1
    }, {
        "names": ["hourglass_flowing_sand"],
        "surrogates": "⏳",
        "unicodeVersion": 6
    }, {
        "names": ["satellite"],
        "surrogates": "📡",
        "unicodeVersion": 6
    }, {
        "names": ["battery"],
        "surrogates": "🔋",
        "unicodeVersion": 6
    }, {
        "names": ["electric_plug"],
        "surrogates": "🔌",
        "unicodeVersion": 6
    }, {
        "names": ["bulb"],
        "surrogates": "💡",
        "unicodeVersion": 6
    }, {
        "names": ["flashlight"],
        "surrogates": "🔦",
        "unicodeVersion": 6
    }, {
        "names": ["candle"],
        "surrogates": "🕯️",
        "unicodeVersion": 7
    }, {
        "names": ["diya_lamp"],
        "surrogates": "🪔",
        "unicodeVersion": 12
    }, {
        "names": ["fire_extinguisher"],
        "surrogates": "🧯",
        "unicodeVersion": 11
    }, {
        "names": ["oil", "oil_drum"],
        "surrogates": "🛢️",
        "unicodeVersion": 7
    }, {
        "names": ["money_with_wings"],
        "surrogates": "💸",
        "unicodeVersion": 6
    }, {
        "names": ["dollar"],
        "surrogates": "💵",
        "unicodeVersion": 6
    }, {
        "names": ["yen"],
        "surrogates": "💴",
        "unicodeVersion": 6
    }, {
        "names": ["euro"],
        "surrogates": "💶",
        "unicodeVersion": 6
    }, {
        "names": ["pound"],
        "surrogates": "💷",
        "unicodeVersion": 6
    }, {
        "names": ["coin"],
        "surrogates": "🪙",
        "unicodeVersion": 13
    }, {
        "names": ["moneybag"],
        "surrogates": "💰",
        "unicodeVersion": 6
    }, {
        "names": ["credit_card"],
        "surrogates": "💳",
        "unicodeVersion": 6
    }, {
        "names": ["gem"],
        "surrogates": "💎",
        "unicodeVersion": 6
    }, {
        "names": ["scales"],
        "surrogates": "⚖️",
        "unicodeVersion": 4.1
    }, {
        "names": ["ladder"],
        "surrogates": "🪜",
        "unicodeVersion": 13
    }, {
        "names": ["toolbox"],
        "surrogates": "🧰",
        "unicodeVersion": 11
    }, {
        "names": ["screwdriver"],
        "surrogates": "🪛",
        "unicodeVersion": 13
    }, {
        "names": ["wrench"],
        "surrogates": "🔧",
        "unicodeVersion": 6
    }, {
        "names": ["hammer"],
        "surrogates": "🔨",
        "unicodeVersion": 6
    }, {
        "names": ["hammer_pick", "hammer_and_pick"],
        "surrogates": "⚒️",
        "unicodeVersion": 4.1
    }, {
        "names": ["tools", "hammer_and_wrench"],
        "surrogates": "🛠️",
        "unicodeVersion": 7
    }, {
        "names": ["pick"],
        "surrogates": "⛏️",
        "unicodeVersion": 5.2
    }, {
        "names": ["nut_and_bolt"],
        "surrogates": "🔩",
        "unicodeVersion": 6
    }, {
        "names": ["gear"],
        "surrogates": "⚙️",
        "unicodeVersion": 4.1
    }, {
        "names": ["bricks"],
        "surrogates": "🧱",
        "unicodeVersion": 11
    }, {
        "names": ["chains"],
        "surrogates": "⛓️",
        "unicodeVersion": 5.2
    }, {
        "names": ["hook"],
        "surrogates": "🪝",
        "unicodeVersion": 13
    }, {
        "names": ["knot"],
        "surrogates": "🪢",
        "unicodeVersion": 13
    }, {
        "names": ["magnet"],
        "surrogates": "🧲",
        "unicodeVersion": 11
    }, {
        "names": ["gun"],
        "surrogates": "🔫",
        "unicodeVersion": 6
    }, {
        "names": ["bomb"],
        "surrogates": "💣",
        "unicodeVersion": 6
    }, {
        "names": ["firecracker"],
        "surrogates": "🧨",
        "unicodeVersion": 11
    }, {
        "names": ["axe"],
        "surrogates": "🪓",
        "unicodeVersion": 12
    }, {
        "names": ["carpentry_saw"],
        "surrogates": "🪚",
        "unicodeVersion": 13
    }, {
        "names": ["knife"],
        "surrogates": "🔪",
        "unicodeVersion": 6
    }, {
        "names": ["dagger", "dagger_knife"],
        "surrogates": "🗡️",
        "unicodeVersion": 7
    }, {
        "names": ["crossed_swords"],
        "surrogates": "⚔️",
        "unicodeVersion": 4.1
    }, {
        "names": ["shield"],
        "surrogates": "🛡️",
        "unicodeVersion": 7
    }, {
        "names": ["smoking"],
        "surrogates": "🚬",
        "unicodeVersion": 6
    }, {
        "names": ["coffin"],
        "surrogates": "⚰️",
        "unicodeVersion": 4.1
    }, {
        "names": ["headstone"],
        "surrogates": "🪦",
        "unicodeVersion": 13
    }, {
        "names": ["urn", "funeral_urn"],
        "surrogates": "⚱️",
        "unicodeVersion": 4.1
    }, {
        "names": ["amphora"],
        "surrogates": "🏺",
        "unicodeVersion": 8
    }, {
        "names": ["magic_wand"],
        "surrogates": "🪄",
        "unicodeVersion": 13
    }, {
        "names": ["crystal_ball"],
        "surrogates": "🔮",
        "unicodeVersion": 6
    }, {
        "names": ["prayer_beads"],
        "surrogates": "📿",
        "unicodeVersion": 8
    }, {
        "names": ["nazar_amulet"],
        "surrogates": "🧿",
        "unicodeVersion": 11
    }, {
        "names": ["barber"],
        "surrogates": "💈",
        "unicodeVersion": 6
    }, {
        "names": ["alembic"],
        "surrogates": "⚗️",
        "unicodeVersion": 4.1
    }, {
        "names": ["telescope"],
        "surrogates": "🔭",
        "unicodeVersion": 6
    }, {
        "names": ["microscope"],
        "surrogates": "🔬",
        "unicodeVersion": 6
    }, {
        "names": ["hole"],
        "surrogates": "🕳️",
        "unicodeVersion": 7
    }, {
        "names": ["window"],
        "surrogates": "🪟",
        "unicodeVersion": 13
    }, {
        "names": ["adhesive_bandage"],
        "surrogates": "🩹",
        "unicodeVersion": 12
    }, {
        "names": ["stethoscope"],
        "surrogates": "🩺",
        "unicodeVersion": 12
    }, {
        "names": ["pill"],
        "surrogates": "💊",
        "unicodeVersion": 6
    }, {
        "names": ["syringe"],
        "surrogates": "💉",
        "unicodeVersion": 6
    }, {
        "names": ["drop_of_blood"],
        "surrogates": "🩸",
        "unicodeVersion": 12
    }, {
        "names": ["dna"],
        "surrogates": "🧬",
        "unicodeVersion": 11
    }, {
        "names": ["microbe"],
        "surrogates": "🦠",
        "unicodeVersion": 11
    }, {
        "names": ["petri_dish"],
        "surrogates": "🧫",
        "unicodeVersion": 11
    }, {
        "names": ["test_tube"],
        "surrogates": "🧪",
        "unicodeVersion": 11
    }, {
        "names": ["thermometer"],
        "surrogates": "🌡️",
        "unicodeVersion": 7
    }, {
        "names": ["mouse_trap"],
        "surrogates": "🪤",
        "unicodeVersion": 13
    }, {
        "names": ["broom"],
        "surrogates": "🧹",
        "unicodeVersion": 11
    }, {
        "names": ["basket"],
        "surrogates": "🧺",
        "unicodeVersion": 11
    }, {
        "names": ["sewing_needle"],
        "surrogates": "🪡",
        "unicodeVersion": 13
    }, {
        "names": ["roll_of_paper"],
        "surrogates": "🧻",
        "unicodeVersion": 11
    }, {
        "names": ["toilet"],
        "surrogates": "🚽",
        "unicodeVersion": 6
    }, {
        "names": ["plunger"],
        "surrogates": "🪠",
        "unicodeVersion": 13
    }, {
        "names": ["bucket"],
        "surrogates": "🪣",
        "unicodeVersion": 13
    }, {
        "names": ["potable_water"],
        "surrogates": "🚰",
        "unicodeVersion": 6
    }, {
        "names": ["shower"],
        "surrogates": "🚿",
        "unicodeVersion": 6
    }, {
        "names": ["bathtub"],
        "surrogates": "🛁",
        "unicodeVersion": 6
    }, {
        "names": ["bath"],
        "surrogates": "🛀",
        "unicodeVersion": 6,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["bath_tone1"],
            "surrogates": "🛀🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["bath_tone2"],
            "surrogates": "🛀🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["bath_tone3"],
            "surrogates": "🛀🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["bath_tone4"],
            "surrogates": "🛀🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["bath_tone5"],
            "surrogates": "🛀🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["toothbrush"],
        "surrogates": "🪥",
        "unicodeVersion": 13
    }, {
        "names": ["soap"],
        "surrogates": "🧼",
        "unicodeVersion": 11
    }, {
        "names": ["razor"],
        "surrogates": "🪒",
        "unicodeVersion": 12
    }, {
        "names": ["sponge"],
        "surrogates": "🧽",
        "unicodeVersion": 11
    }, {
        "names": ["squeeze_bottle"],
        "surrogates": "🧴",
        "unicodeVersion": 11
    }, {
        "names": ["bellhop", "bellhop_bell"],
        "surrogates": "🛎️",
        "unicodeVersion": 7
    }, {
        "names": ["key"],
        "surrogates": "🔑",
        "unicodeVersion": 6
    }, {
        "names": ["key2", "old_key"],
        "surrogates": "🗝️",
        "unicodeVersion": 7
    }, {
        "names": ["door"],
        "surrogates": "🚪",
        "unicodeVersion": 6
    }, {
        "names": ["chair"],
        "surrogates": "🪑",
        "unicodeVersion": 12
    }, {
        "names": ["mirror"],
        "surrogates": "🪞",
        "unicodeVersion": 13
    }, {
        "names": ["couch", "couch_and_lamp"],
        "surrogates": "🛋️",
        "unicodeVersion": 7
    }, {
        "names": ["bed"],
        "surrogates": "🛏️",
        "unicodeVersion": 7
    }, {
        "names": ["sleeping_accommodation"],
        "surrogates": "🛌",
        "unicodeVersion": 7,
        "hasDiversity": true,
        "diversityChildren": [{
            "names": ["person_in_bed_tone1", "person_in_bed_light_skin_tone"],
            "surrogates": "🛌🏻",
            "unicodeVersion": 8,
            "diversity": ["1f3fb"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_bed_tone2", "person_in_bed_medium_light_skin_tone"],
            "surrogates": "🛌🏼",
            "unicodeVersion": 8,
            "diversity": ["1f3fc"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_bed_tone3", "person_in_bed_medium_skin_tone"],
            "surrogates": "🛌🏽",
            "unicodeVersion": 8,
            "diversity": ["1f3fd"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_bed_tone4", "person_in_bed_medium_dark_skin_tone"],
            "surrogates": "🛌🏾",
            "unicodeVersion": 8,
            "diversity": ["1f3fe"],
            "hasDiversityParent": true
        }, {
            "names": ["person_in_bed_tone5", "person_in_bed_dark_skin_tone"],
            "surrogates": "🛌🏿",
            "unicodeVersion": 8,
            "diversity": ["1f3ff"],
            "hasDiversityParent": true
        }]
    }, {
        "names": ["teddy_bear"],
        "surrogates": "🧸",
        "unicodeVersion": 11
    }, {
        "names": ["frame_photo", "frame_with_picture"],
        "surrogates": "🖼️",
        "unicodeVersion": 7
    }, {
        "names": ["shopping_bags"],
        "surrogates": "🛍️",
        "unicodeVersion": 7
    }, {
        "names": ["shopping_cart", "shopping_trolley"],
        "surrogates": "🛒",
        "unicodeVersion": 9
    }, {
        "names": ["gift"],
        "surrogates": "🎁",
        "unicodeVersion": 6
    }, {
        "names": ["balloon"],
        "surrogates": "🎈",
        "unicodeVersion": 6
    }, {
        "names": ["flags"],
        "surrogates": "🎏",
        "unicodeVersion": 6
    }, {
        "names": ["ribbon"],
        "surrogates": "🎀",
        "unicodeVersion": 6
    }, {
        "names": ["confetti_ball"],
        "surrogates": "🎊",
        "unicodeVersion": 6
    }, {
        "names": ["tada"],
        "surrogates": "🎉",
        "unicodeVersion": 6
    }, {
        "names": ["piñata"],
        "surrogates": "🪅",
        "unicodeVersion": 13
    }, {
        "names": ["nesting_dolls"],
        "surrogates": "🪆",
        "unicodeVersion": 13
    }, {
        "names": ["dolls"],
        "surrogates": "🎎",
        "unicodeVersion": 6
    }, {
        "names": ["izakaya_lantern"],
        "surrogates": "🏮",
        "unicodeVersion": 6
    }, {
        "names": ["wind_chime"],
        "surrogates": "🎐",
        "unicodeVersion": 6
    }, {
        "names": ["red_envelope"],
        "surrogates": "🧧",
        "unicodeVersion": 11
    }, {
        "names": ["envelope"],
        "surrogates": "✉️",
        "unicodeVersion": 1.1
    }, {
        "names": ["envelope_with_arrow"],
        "surrogates": "📩",
        "unicodeVersion": 6
    }, {
        "names": ["incoming_envelope"],
        "surrogates": "📨",
        "unicodeVersion": 6
    }, {
        "names": ["e_mail", "email"],
        "surrogates": "📧",
        "unicodeVersion": 6
    }, {
        "names": ["love_letter"],
        "surrogates": "💌",
        "unicodeVersion": 6
    }, {
        "names": ["inbox_tray"],
        "surrogates": "📥",
        "unicodeVersion": 6
    }, {
        "names": ["outbox_tray"],
        "surrogates": "📤",
        "unicodeVersion": 6
    }, {
        "names": ["package"],
        "surrogates": "📦",
        "unicodeVersion": 6
    }, {
        "names": ["label"],
        "surrogates": "🏷️",
        "unicodeVersion": 7
    }, {
        "names": ["mailbox_closed"],
        "surrogates": "📪",
        "unicodeVersion": 6
    }, {
        "names": ["mailbox"],
        "surrogates": "📫",
        "unicodeVersion": 6
    }, {
        "names": ["mailbox_with_mail"],
        "surrogates": "📬",
        "unicodeVersion": 6
    }, {
        "names": ["mailbox_with_no_mail"],
        "surrogates": "📭",
        "unicodeVersion": 6
    }, {
        "names": ["postbox"],
        "surrogates": "📮",
        "unicodeVersion": 6
    }, {
        "names": ["postal_horn"],
        "surrogates": "📯",
        "unicodeVersion": 6
    }, {
        "names": ["placard"],
        "surrogates": "🪧",
        "unicodeVersion": 13
    }, {
        "names": ["scroll"],
        "surrogates": "📜",
        "unicodeVersion": 6
    }, {
        "names": ["page_with_curl"],
        "surrogates": "📃",
        "unicodeVersion": 6
    }, {
        "names": ["page_facing_up"],
        "surrogates": "📄",
        "unicodeVersion": 6
    }, {
        "names": ["bookmark_tabs"],
        "surrogates": "📑",
        "unicodeVersion": 6
    }, {
        "names": ["receipt"],
        "surrogates": "🧾",
        "unicodeVersion": 11
    }, {
        "names": ["bar_chart"],
        "surrogates": "📊",
        "unicodeVersion": 6
    }, {
        "names": ["chart_with_upwards_trend"],
        "surrogates": "📈",
        "unicodeVersion": 6
    }, {
        "names": ["chart_with_downwards_trend"],
        "surrogates": "📉",
        "unicodeVersion": 6
    }, {
        "names": ["notepad_spiral", "spiral_note_pad"],
        "surrogates": "🗒️",
        "unicodeVersion": 7
    }, {
        "names": ["calendar_spiral", "spiral_calendar_pad"],
        "surrogates": "🗓️",
        "unicodeVersion": 7
    }, {
        "names": ["calendar"],
        "surrogates": "📆",
        "unicodeVersion": 6
    }, {
        "names": ["date"],
        "surrogates": "📅",
        "unicodeVersion": 6
    }, {
        "names": ["wastebasket"],
        "surrogates": "🗑️",
        "unicodeVersion": 7
    }, {
        "names": ["card_index"],
        "surrogates": "📇",
        "unicodeVersion": 6
    }, {
        "names": ["card_box", "card_file_box"],
        "surrogates": "🗃️",
        "unicodeVersion": 7
    }, {
        "names": ["ballot_box", "ballot_box_with_ballot"],
        "surrogates": "🗳️",
        "unicodeVersion": 7
    }, {
        "names": ["file_cabinet"],
        "surrogates": "🗄️",
        "unicodeVersion": 7
    }, {
        "names": ["clipboard"],
        "surrogates": "📋",
        "unicodeVersion": 6
    }, {
        "names": ["file_folder"],
        "surrogates": "📁",
        "unicodeVersion": 6
    }, {
        "names": ["open_file_folder"],
        "surrogates": "📂",
        "unicodeVersion": 6
    }, {
        "names": ["dividers", "card_index_dividers"],
        "surrogates": "🗂️",
        "unicodeVersion": 7
    }, {
        "names": ["newspaper2", "rolled_up_newspaper"],
        "surrogates": "🗞️",
        "unicodeVersion": 7
    }, {
        "names": ["newspaper"],
        "surrogates": "📰",
        "unicodeVersion": 6
    }, {
        "names": ["notebook"],
        "surrogates": "📓",
        "unicodeVersion": 6
    }, {
        "names": ["notebook_with_decorative_cover"],
        "surrogates": "📔",
        "unicodeVersion": 6
    }, {
        "names": ["ledger"],
        "surrogates": "📒",
        "unicodeVersion": 6
    }, {
        "names": ["closed_book"],
        "surrogates": "📕",
        "unicodeVersion": 6
    }, {
        "names": ["green_book"],
        "surrogates": "📗",
        "unicodeVersion": 6
    }, {
        "names": ["blue_book"],
        "surrogates": "📘",
        "unicodeVersion": 6
    }, {
        "names": ["orange_book"],
        "surrogates": "📙",
        "unicodeVersion": 6
    }, {
        "names": ["books"],
        "surrogates": "📚",
        "unicodeVersion": 6
    }, {
        "names": ["book"],
        "surrogates": "📖",
        "unicodeVersion": 6
    }, {
        "names": ["bookmark"],
        "surrogates": "🔖",
        "unicodeVersion": 6
    }, {
        "names": ["safety_pin"],
        "surrogates": "🧷",
        "unicodeVersion": 11
    }, {
        "names": ["link"],
        "surrogates": "🔗",
        "unicodeVersion": 6
    }, {
        "names": ["paperclip"],
        "surrogates": "📎",
        "unicodeVersion": 6
    }, {
        "names": ["paperclips", "linked_paperclips"],
        "surrogates": "🖇️",
        "unicodeVersion": 7
    }, {
        "names": ["triangular_ruler"],
        "surrogates": "📐",
        "unicodeVersion": 6
    }, {
        "names": ["straight_ruler"],
        "surrogates": "📏",
        "unicodeVersion": 6
    }, {
        "names": ["abacus"],
        "surrogates": "🧮",
        "unicodeVersion": 11
    }, {
        "names": ["pushpin"],
        "surrogates": "📌",
        "unicodeVersion": 6
    }, {
        "names": ["round_pushpin"],
        "surrogates": "📍",
        "unicodeVersion": 6
    }, {
        "names": ["scissors"],
        "surrogates": "✂️",
        "unicodeVersion": 1.1
    }, {
        "names": ["pen_ballpoint", "lower_left_ballpoint_pen"],
        "surrogates": "🖊️",
        "unicodeVersion": 7
    }, {
        "names": ["pen_fountain", "lower_left_fountain_pen"],
        "surrogates": "🖋️",
        "unicodeVersion": 7
    }, {
        "names": ["black_nib"],
        "surrogates": "✒️",
        "unicodeVersion": 1.1
    }, {
        "names": ["paintbrush", "lower_left_paintbrush"],
        "surrogates": "🖌️",
        "unicodeVersion": 7
    }, {
        "names": ["crayon", "lower_left_crayon"],
        "surrogates": "🖍️",
        "unicodeVersion": 7
    }, {
        "names": ["pencil", "memo"],
        "surrogates": "📝",
        "unicodeVersion": 6
    }, {
        "names": ["pencil2"],
        "surrogates": "✏️",
        "unicodeVersion": 1.1
    }, {
        "names": ["mag"],
        "surrogates": "🔍",
        "unicodeVersion": 6
    }, {
        "names": ["mag_right"],
        "surrogates": "🔎",
        "unicodeVersion": 6
    }, {
        "names": ["lock_with_ink_pen"],
        "surrogates": "🔏",
        "unicodeVersion": 6
    }, {
        "names": ["closed_lock_with_key"],
        "surrogates": "🔐",
        "unicodeVersion": 6
    }, {
        "names": ["lock"],
        "surrogates": "🔒",
        "unicodeVersion": 6
    }, {
        "names": ["unlock"],
        "surrogates": "🔓",
        "unicodeVersion": 6
    }],
    "symbols": [{
        "names": ["heart"],
        "surrogates": "❤️",
        "unicodeVersion": 1.1
    }, {
        "names": ["orange_heart"],
        "surrogates": "🧡",
        "unicodeVersion": 10
    }, {
        "names": ["yellow_heart"],
        "surrogates": "💛",
        "unicodeVersion": 6
    }, {
        "names": ["green_heart"],
        "surrogates": "💚",
        "unicodeVersion": 6
    }, {
        "names": ["blue_heart"],
        "surrogates": "💙",
        "unicodeVersion": 6
    }, {
        "names": ["purple_heart"],
        "surrogates": "💜",
        "unicodeVersion": 6
    }, {
        "names": ["black_heart"],
        "surrogates": "🖤",
        "unicodeVersion": 9
    }, {
        "names": ["brown_heart"],
        "surrogates": "🤎",
        "unicodeVersion": 12
    }, {
        "names": ["white_heart"],
        "surrogates": "🤍",
        "unicodeVersion": 12
    }, {
        "names": ["broken_heart"],
        "surrogates": "💔",
        "unicodeVersion": 6
    }, {
        "names": ["heart_exclamation", "heavy_heart_exclamation_mark_ornament"],
        "surrogates": "❣️",
        "unicodeVersion": 1.1
    }, {
        "names": ["two_hearts"],
        "surrogates": "💕",
        "unicodeVersion": 6
    }, {
        "names": ["revolving_hearts"],
        "surrogates": "💞",
        "unicodeVersion": 6
    }, {
        "names": ["heartbeat"],
        "surrogates": "💓",
        "unicodeVersion": 6
    }, {
        "names": ["heartpulse"],
        "surrogates": "💗",
        "unicodeVersion": 6
    }, {
        "names": ["sparkling_heart"],
        "surrogates": "💖",
        "unicodeVersion": 6
    }, {
        "names": ["cupid"],
        "surrogates": "💘",
        "unicodeVersion": 6
    }, {
        "names": ["gift_heart"],
        "surrogates": "💝",
        "unicodeVersion": 6
    }, {
        "names": ["heart_decoration"],
        "surrogates": "💟",
        "unicodeVersion": 6
    }, {
        "names": ["peace", "peace_symbol"],
        "surrogates": "☮️",
        "unicodeVersion": 1.1
    }, {
        "names": ["cross", "latin_cross"],
        "surrogates": "✝️",
        "unicodeVersion": 1.1
    }, {
        "names": ["star_and_crescent"],
        "surrogates": "☪️",
        "unicodeVersion": 1.1
    }, {
        "names": ["om_symbol"],
        "surrogates": "🕉️",
        "unicodeVersion": 7
    }, {
        "names": ["wheel_of_dharma"],
        "surrogates": "☸️",
        "unicodeVersion": 1.1
    }, {
        "names": ["star_of_david"],
        "surrogates": "✡️",
        "unicodeVersion": 1.1
    }, {
        "names": ["six_pointed_star"],
        "surrogates": "🔯",
        "unicodeVersion": 6
    }, {
        "names": ["menorah"],
        "surrogates": "🕎",
        "unicodeVersion": 8
    }, {
        "names": ["yin_yang"],
        "surrogates": "☯️",
        "unicodeVersion": 1.1
    }, {
        "names": ["orthodox_cross"],
        "surrogates": "☦️",
        "unicodeVersion": 1.1
    }, {
        "names": ["place_of_worship", "worship_symbol"],
        "surrogates": "🛐",
        "unicodeVersion": 8
    }, {
        "names": ["ophiuchus"],
        "surrogates": "⛎",
        "unicodeVersion": 6
    }, {
        "names": ["aries"],
        "surrogates": "♈",
        "unicodeVersion": 1.1
    }, {
        "names": ["taurus"],
        "surrogates": "♉",
        "unicodeVersion": 1.1
    }, {
        "names": ["gemini"],
        "surrogates": "♊",
        "unicodeVersion": 1.1
    }, {
        "names": ["cancer"],
        "surrogates": "♋",
        "unicodeVersion": 1.1
    }, {
        "names": ["leo"],
        "surrogates": "♌",
        "unicodeVersion": 1.1
    }, {
        "names": ["virgo"],
        "surrogates": "♍",
        "unicodeVersion": 1.1
    }, {
        "names": ["libra"],
        "surrogates": "♎",
        "unicodeVersion": 1.1
    }, {
        "names": ["scorpius"],
        "surrogates": "♏",
        "unicodeVersion": 1.1
    }, {
        "names": ["sagittarius"],
        "surrogates": "♐",
        "unicodeVersion": 1.1
    }, {
        "names": ["capricorn"],
        "surrogates": "♑",
        "unicodeVersion": 1.1
    }, {
        "names": ["aquarius"],
        "surrogates": "♒",
        "unicodeVersion": 1.1
    }, {
        "names": ["pisces"],
        "surrogates": "♓",
        "unicodeVersion": 1.1
    }, {
        "names": ["id"],
        "surrogates": "🆔",
        "unicodeVersion": 6
    }, {
        "names": ["atom", "atom_symbol"],
        "surrogates": "⚛️",
        "unicodeVersion": 4.1
    }, {
        "names": ["accept"],
        "surrogates": "🉑",
        "unicodeVersion": 6
    }, {
        "names": ["radioactive", "radioactive_sign"],
        "surrogates": "☢️",
        "unicodeVersion": 1.1
    }, {
        "names": ["biohazard", "biohazard_sign"],
        "surrogates": "☣️",
        "unicodeVersion": 1.1
    }, {
        "names": ["mobile_phone_off"],
        "surrogates": "📴",
        "unicodeVersion": 6
    }, {
        "names": ["vibration_mode"],
        "surrogates": "📳",
        "unicodeVersion": 6
    }, {
        "names": ["u6709"],
        "surrogates": "🈶",
        "unicodeVersion": 6
    }, {
        "names": ["u7121"],
        "surrogates": "🈚",
        "unicodeVersion": 5.2
    }, {
        "names": ["u7533"],
        "surrogates": "🈸",
        "unicodeVersion": 6
    }, {
        "names": ["u55b6"],
        "surrogates": "🈺",
        "unicodeVersion": 6
    }, {
        "names": ["u6708"],
        "surrogates": "🈷️",
        "unicodeVersion": 6
    }, {
        "names": ["eight_pointed_black_star"],
        "surrogates": "✴️",
        "unicodeVersion": 1.1
    }, {
        "names": ["vs"],
        "surrogates": "🆚",
        "unicodeVersion": 6
    }, {
        "names": ["white_flower"],
        "surrogates": "💮",
        "unicodeVersion": 6
    }, {
        "names": ["ideograph_advantage"],
        "surrogates": "🉐",
        "unicodeVersion": 6
    }, {
        "names": ["secret"],
        "surrogates": "㊙️",
        "unicodeVersion": 1.1
    }, {
        "names": ["congratulations"],
        "surrogates": "㊗️",
        "unicodeVersion": 1.1
    }, {
        "names": ["u5408"],
        "surrogates": "🈴",
        "unicodeVersion": 6
    }, {
        "names": ["u6e80"],
        "surrogates": "🈵",
        "unicodeVersion": 6
    }, {
        "names": ["u5272"],
        "surrogates": "🈹",
        "unicodeVersion": 6
    }, {
        "names": ["u7981"],
        "surrogates": "🈲",
        "unicodeVersion": 6
    }, {
        "names": ["a"],
        "surrogates": "🅰️",
        "unicodeVersion": 6
    }, {
        "names": ["b"],
        "surrogates": "🅱️",
        "unicodeVersion": 6
    }, {
        "names": ["ab"],
        "surrogates": "🆎",
        "unicodeVersion": 6
    }, {
        "names": ["cl"],
        "surrogates": "🆑",
        "unicodeVersion": 6
    }, {
        "names": ["o2"],
        "surrogates": "🅾️",
        "unicodeVersion": 6
    }, {
        "names": ["sos"],
        "surrogates": "🆘",
        "unicodeVersion": 6
    }, {
        "names": ["x"],
        "surrogates": "❌",
        "unicodeVersion": 6
    }, {
        "names": ["o"],
        "surrogates": "⭕",
        "unicodeVersion": 5.2
    }, {
        "names": ["octagonal_sign", "stop_sign"],
        "surrogates": "🛑",
        "unicodeVersion": 9
    }, {
        "names": ["no_entry"],
        "surrogates": "⛔",
        "unicodeVersion": 5.2
    }, {
        "names": ["name_badge"],
        "surrogates": "📛",
        "unicodeVersion": 6
    }, {
        "names": ["no_entry_sign"],
        "surrogates": "🚫",
        "unicodeVersion": 6
    }, {
        "names": ["100"],
        "surrogates": "💯",
        "unicodeVersion": 6
    }, {
        "names": ["anger"],
        "surrogates": "💢",
        "unicodeVersion": 6
    }, {
        "names": ["hotsprings"],
        "surrogates": "♨️",
        "unicodeVersion": 1.1
    }, {
        "names": ["no_pedestrians"],
        "surrogates": "🚷",
        "unicodeVersion": 6
    }, {
        "names": ["do_not_litter"],
        "surrogates": "🚯",
        "unicodeVersion": 6
    }, {
        "names": ["no_bicycles"],
        "surrogates": "🚳",
        "unicodeVersion": 6
    }, {
        "names": ["non_potable_water"],
        "surrogates": "🚱",
        "unicodeVersion": 6
    }, {
        "names": ["underage"],
        "surrogates": "🔞",
        "unicodeVersion": 6
    }, {
        "names": ["no_mobile_phones"],
        "surrogates": "📵",
        "unicodeVersion": 6
    }, {
        "names": ["no_smoking"],
        "surrogates": "🚭",
        "unicodeVersion": 6
    }, {
        "names": ["exclamation"],
        "surrogates": "❗",
        "unicodeVersion": 5.2
    }, {
        "names": ["grey_exclamation"],
        "surrogates": "❕",
        "unicodeVersion": 6
    }, {
        "names": ["question"],
        "surrogates": "❓",
        "unicodeVersion": 6
    }, {
        "names": ["grey_question"],
        "surrogates": "❔",
        "unicodeVersion": 6
    }, {
        "names": ["bangbang"],
        "surrogates": "‼️",
        "unicodeVersion": 1.1
    }, {
        "names": ["interrobang"],
        "surrogates": "⁉️",
        "unicodeVersion": 3
    }, {
        "names": ["low_brightness"],
        "surrogates": "🔅",
        "unicodeVersion": 6
    }, {
        "names": ["high_brightness"],
        "surrogates": "🔆",
        "unicodeVersion": 6
    }, {
        "names": ["part_alternation_mark"],
        "surrogates": "〽️",
        "unicodeVersion": 3.2
    }, {
        "names": ["warning"],
        "surrogates": "⚠️",
        "unicodeVersion": 4
    }, {
        "names": ["children_crossing"],
        "surrogates": "🚸",
        "unicodeVersion": 6
    }, {
        "names": ["trident"],
        "surrogates": "🔱",
        "unicodeVersion": 6
    }, {
        "names": ["fleur_de_lis"],
        "surrogates": "⚜️",
        "unicodeVersion": 4.1
    }, {
        "names": ["beginner"],
        "surrogates": "🔰",
        "unicodeVersion": 6
    }, {
        "names": ["recycle"],
        "surrogates": "♻️",
        "unicodeVersion": 3.2
    }, {
        "names": ["white_check_mark"],
        "surrogates": "✅",
        "unicodeVersion": 6
    }, {
        "names": ["u6307"],
        "surrogates": "🈯",
        "unicodeVersion": 5.2
    }, {
        "names": ["chart"],
        "surrogates": "💹",
        "unicodeVersion": 6
    }, {
        "names": ["sparkle"],
        "surrogates": "❇️",
        "unicodeVersion": 1.1
    }, {
        "names": ["eight_spoked_asterisk"],
        "surrogates": "✳️",
        "unicodeVersion": 1.1
    }, {
        "names": ["negative_squared_cross_mark"],
        "surrogates": "❎",
        "unicodeVersion": 6
    }, {
        "names": ["globe_with_meridians"],
        "surrogates": "🌐",
        "unicodeVersion": 6
    }, {
        "names": ["diamond_shape_with_a_dot_inside"],
        "surrogates": "💠",
        "unicodeVersion": 6
    }, {
        "names": ["m"],
        "surrogates": "Ⓜ️",
        "unicodeVersion": 1.1
    }, {
        "names": ["cyclone"],
        "surrogates": "🌀",
        "unicodeVersion": 6
    }, {
        "names": ["zzz"],
        "surrogates": "💤",
        "unicodeVersion": 6
    }, {
        "names": ["atm"],
        "surrogates": "🏧",
        "unicodeVersion": 6
    }, {
        "names": ["wc"],
        "surrogates": "🚾",
        "unicodeVersion": 6
    }, {
        "names": ["wheelchair"],
        "surrogates": "♿",
        "unicodeVersion": 4.1
    }, {
        "names": ["parking"],
        "surrogates": "🅿️",
        "unicodeVersion": 5.2
    }, {
        "names": ["u7a7a"],
        "surrogates": "🈳",
        "unicodeVersion": 6
    }, {
        "names": ["sa"],
        "surrogates": "🈂️",
        "unicodeVersion": 6
    }, {
        "names": ["passport_control"],
        "surrogates": "🛂",
        "unicodeVersion": 6
    }, {
        "names": ["customs"],
        "surrogates": "🛃",
        "unicodeVersion": 6
    }, {
        "names": ["baggage_claim"],
        "surrogates": "🛄",
        "unicodeVersion": 6
    }, {
        "names": ["left_luggage"],
        "surrogates": "🛅",
        "unicodeVersion": 6
    }, {
        "names": ["elevator"],
        "surrogates": "🛗",
        "unicodeVersion": 13
    }, {
        "names": ["mens"],
        "surrogates": "🚹",
        "unicodeVersion": 6
    }, {
        "names": ["womens"],
        "surrogates": "🚺",
        "unicodeVersion": 6
    }, {
        "names": ["baby_symbol"],
        "surrogates": "🚼",
        "unicodeVersion": 6
    }, {
        "names": ["restroom"],
        "surrogates": "🚻",
        "unicodeVersion": 6
    }, {
        "names": ["put_litter_in_its_place"],
        "surrogates": "🚮",
        "unicodeVersion": 6
    }, {
        "names": ["cinema"],
        "surrogates": "🎦",
        "unicodeVersion": 6
    }, {
        "names": ["signal_strength"],
        "surrogates": "📶",
        "unicodeVersion": 6
    }, {
        "names": ["koko"],
        "surrogates": "🈁",
        "unicodeVersion": 6
    }, {
        "names": ["symbols"],
        "surrogates": "🔣",
        "unicodeVersion": 6
    }, {
        "names": ["information_source"],
        "surrogates": "ℹ️",
        "unicodeVersion": 3
    }, {
        "names": ["abc"],
        "surrogates": "🔤",
        "unicodeVersion": 6
    }, {
        "names": ["abcd"],
        "surrogates": "🔡",
        "unicodeVersion": 6
    }, {
        "names": ["capital_abcd"],
        "surrogates": "🔠",
        "unicodeVersion": 6
    }, {
        "names": ["ng"],
        "surrogates": "🆖",
        "unicodeVersion": 6
    }, {
        "names": ["ok"],
        "surrogates": "🆗",
        "unicodeVersion": 6
    }, {
        "names": ["up"],
        "surrogates": "🆙",
        "unicodeVersion": 6
    }, {
        "names": ["cool"],
        "surrogates": "🆒",
        "unicodeVersion": 6
    }, {
        "names": ["new"],
        "surrogates": "🆕",
        "unicodeVersion": 6
    }, {
        "names": ["free"],
        "surrogates": "🆓",
        "unicodeVersion": 6
    }, {
        "names": ["zero"],
        "surrogates": "0️⃣",
        "unicodeVersion": 3
    }, {
        "names": ["one"],
        "surrogates": "1️⃣",
        "unicodeVersion": 3
    }, {
        "names": ["two"],
        "surrogates": "2️⃣",
        "unicodeVersion": 3
    }, {
        "names": ["three"],
        "surrogates": "3️⃣",
        "unicodeVersion": 3
    }, {
        "names": ["four"],
        "surrogates": "4️⃣",
        "unicodeVersion": 3
    }, {
        "names": ["five"],
        "surrogates": "5️⃣",
        "unicodeVersion": 3
    }, {
        "names": ["six"],
        "surrogates": "6️⃣",
        "unicodeVersion": 3
    }, {
        "names": ["seven"],
        "surrogates": "7️⃣",
        "unicodeVersion": 3
    }, {
        "names": ["eight"],
        "surrogates": "8️⃣",
        "unicodeVersion": 3
    }, {
        "names": ["nine"],
        "surrogates": "9️⃣",
        "unicodeVersion": 3
    }, {
        "names": ["keycap_ten"],
        "surrogates": "🔟",
        "unicodeVersion": 6
    }, {
        "names": ["1234"],
        "surrogates": "🔢",
        "unicodeVersion": 6
    }, {
        "names": ["hash"],
        "surrogates": "#️⃣",
        "unicodeVersion": 3
    }, {
        "names": ["asterisk", "keycap_asterisk"],
        "surrogates": "*️⃣",
        "unicodeVersion": 3
    }, {
        "names": ["eject", "eject_symbol"],
        "surrogates": "⏏️",
        "unicodeVersion": 4
    }, {
        "names": ["arrow_forward"],
        "surrogates": "▶️",
        "unicodeVersion": 1.1
    }, {
        "names": ["pause_button", "double_vertical_bar"],
        "surrogates": "⏸️",
        "unicodeVersion": 7
    }, {
        "names": ["play_pause"],
        "surrogates": "⏯️",
        "unicodeVersion": 6
    }, {
        "names": ["stop_button"],
        "surrogates": "⏹️",
        "unicodeVersion": 7
    }, {
        "names": ["record_button"],
        "surrogates": "⏺️",
        "unicodeVersion": 7
    }, {
        "names": ["track_next", "next_track"],
        "surrogates": "⏭️",
        "unicodeVersion": 6
    }, {
        "names": ["track_previous", "previous_track"],
        "surrogates": "⏮️",
        "unicodeVersion": 6
    }, {
        "names": ["fast_forward"],
        "surrogates": "⏩",
        "unicodeVersion": 6
    }, {
        "names": ["rewind"],
        "surrogates": "⏪",
        "unicodeVersion": 6
    }, {
        "names": ["arrow_double_up"],
        "surrogates": "⏫",
        "unicodeVersion": 6
    }, {
        "names": ["arrow_double_down"],
        "surrogates": "⏬",
        "unicodeVersion": 6
    }, {
        "names": ["arrow_backward"],
        "surrogates": "◀️",
        "unicodeVersion": 1.1
    }, {
        "names": ["arrow_up_small"],
        "surrogates": "🔼",
        "unicodeVersion": 6
    }, {
        "names": ["arrow_down_small"],
        "surrogates": "🔽",
        "unicodeVersion": 6
    }, {
        "names": ["arrow_right"],
        "surrogates": "➡️",
        "unicodeVersion": 1.1
    }, {
        "names": ["arrow_left"],
        "surrogates": "⬅️",
        "unicodeVersion": 4
    }, {
        "names": ["arrow_up"],
        "surrogates": "⬆️",
        "unicodeVersion": 4
    }, {
        "names": ["arrow_down"],
        "surrogates": "⬇️",
        "unicodeVersion": 4
    }, {
        "names": ["arrow_upper_right"],
        "surrogates": "↗️",
        "unicodeVersion": 1.1
    }, {
        "names": ["arrow_lower_right"],
        "surrogates": "↘️",
        "unicodeVersion": 1.1
    }, {
        "names": ["arrow_lower_left"],
        "surrogates": "↙️",
        "unicodeVersion": 1.1
    }, {
        "names": ["arrow_upper_left"],
        "surrogates": "↖️",
        "unicodeVersion": 1.1
    }, {
        "names": ["arrow_up_down"],
        "surrogates": "↕️",
        "unicodeVersion": 1.1
    }, {
        "names": ["left_right_arrow"],
        "surrogates": "↔️",
        "unicodeVersion": 1.1
    }, {
        "names": ["arrow_right_hook"],
        "surrogates": "↪️",
        "unicodeVersion": 1.1
    }, {
        "names": ["leftwards_arrow_with_hook"],
        "surrogates": "↩️",
        "unicodeVersion": 1.1
    }, {
        "names": ["arrow_heading_up"],
        "surrogates": "⤴️",
        "unicodeVersion": 3.2
    }, {
        "names": ["arrow_heading_down"],
        "surrogates": "⤵️",
        "unicodeVersion": 3.2
    }, {
        "names": ["twisted_rightwards_arrows"],
        "surrogates": "🔀",
        "unicodeVersion": 6
    }, {
        "names": ["repeat"],
        "surrogates": "🔁",
        "unicodeVersion": 6
    }, {
        "names": ["repeat_one"],
        "surrogates": "🔂",
        "unicodeVersion": 6
    }, {
        "names": ["arrows_counterclockwise"],
        "surrogates": "🔄",
        "unicodeVersion": 6
    }, {
        "names": ["arrows_clockwise"],
        "surrogates": "🔃",
        "unicodeVersion": 6
    }, {
        "names": ["musical_note"],
        "surrogates": "🎵",
        "unicodeVersion": 6
    }, {
        "names": ["notes"],
        "surrogates": "🎶",
        "unicodeVersion": 6
    }, {
        "names": ["heavy_plus_sign"],
        "surrogates": "➕",
        "unicodeVersion": 6
    }, {
        "names": ["heavy_minus_sign"],
        "surrogates": "➖",
        "unicodeVersion": 6
    }, {
        "names": ["heavy_division_sign"],
        "surrogates": "➗",
        "unicodeVersion": 6
    }, {
        "names": ["heavy_multiplication_x"],
        "surrogates": "✖️",
        "unicodeVersion": 1.1
    }, {
        "names": ["infinity"],
        "surrogates": "♾️",
        "unicodeVersion": 11
    }, {
        "names": ["heavy_dollar_sign"],
        "surrogates": "💲",
        "unicodeVersion": 6
    }, {
        "names": ["currency_exchange"],
        "surrogates": "💱",
        "unicodeVersion": 6
    }, {
        "names": ["tm"],
        "surrogates": "™️",
        "unicodeVersion": 1.1
    }, {
        "names": ["copyright"],
        "surrogates": "©️",
        "unicodeVersion": 1.1
    }, {
        "names": ["registered"],
        "surrogates": "®️",
        "unicodeVersion": 1.1
    }, {
        "names": ["wavy_dash"],
        "surrogates": "〰️",
        "unicodeVersion": 1.1
    }, {
        "names": ["curly_loop"],
        "surrogates": "➰",
        "unicodeVersion": 6
    }, {
        "names": ["loop"],
        "surrogates": "➿",
        "unicodeVersion": 6
    }, {
        "names": ["end"],
        "surrogates": "🔚",
        "unicodeVersion": 6
    }, {
        "names": ["back"],
        "surrogates": "🔙",
        "unicodeVersion": 6
    }, {
        "names": ["on"],
        "surrogates": "🔛",
        "unicodeVersion": 6
    }, {
        "names": ["top"],
        "surrogates": "🔝",
        "unicodeVersion": 6
    }, {
        "names": ["soon"],
        "surrogates": "🔜",
        "unicodeVersion": 6
    }, {
        "names": ["heavy_check_mark"],
        "surrogates": "✔️",
        "unicodeVersion": 1.1
    }, {
        "names": ["ballot_box_with_check"],
        "surrogates": "☑️",
        "unicodeVersion": 1.1
    }, {
        "names": ["radio_button"],
        "surrogates": "🔘",
        "unicodeVersion": 6
    }, {
        "names": ["white_circle"],
        "surrogates": "⚪",
        "unicodeVersion": 4.1
    }, {
        "names": ["black_circle"],
        "surrogates": "⚫",
        "unicodeVersion": 4.1
    }, {
        "names": ["red_circle"],
        "surrogates": "🔴",
        "unicodeVersion": 6
    }, {
        "names": ["blue_circle"],
        "surrogates": "🔵",
        "unicodeVersion": 6
    }, {
        "names": ["brown_circle"],
        "surrogates": "🟤",
        "unicodeVersion": 12
    }, {
        "names": ["purple_circle"],
        "surrogates": "🟣",
        "unicodeVersion": 12
    }, {
        "names": ["green_circle"],
        "surrogates": "🟢",
        "unicodeVersion": 12
    }, {
        "names": ["yellow_circle"],
        "surrogates": "🟡",
        "unicodeVersion": 12
    }, {
        "names": ["orange_circle"],
        "surrogates": "🟠",
        "unicodeVersion": 12
    }, {
        "names": ["small_red_triangle"],
        "surrogates": "🔺",
        "unicodeVersion": 6
    }, {
        "names": ["small_red_triangle_down"],
        "surrogates": "🔻",
        "unicodeVersion": 6
    }, {
        "names": ["small_orange_diamond"],
        "surrogates": "🔸",
        "unicodeVersion": 6
    }, {
        "names": ["small_blue_diamond"],
        "surrogates": "🔹",
        "unicodeVersion": 6
    }, {
        "names": ["large_orange_diamond"],
        "surrogates": "🔶",
        "unicodeVersion": 6
    }, {
        "names": ["large_blue_diamond"],
        "surrogates": "🔷",
        "unicodeVersion": 6
    }, {
        "names": ["white_square_button"],
        "surrogates": "🔳",
        "unicodeVersion": 6
    }, {
        "names": ["black_square_button"],
        "surrogates": "🔲",
        "unicodeVersion": 6
    }, {
        "names": ["black_small_square"],
        "surrogates": "▪️",
        "unicodeVersion": 1.1
    }, {
        "names": ["white_small_square"],
        "surrogates": "▫️",
        "unicodeVersion": 1.1
    }, {
        "names": ["black_medium_small_square"],
        "surrogates": "◾",
        "unicodeVersion": 3.2
    }, {
        "names": ["white_medium_small_square"],
        "surrogates": "◽",
        "unicodeVersion": 3.2
    }, {
        "names": ["black_medium_square"],
        "surrogates": "◼️",
        "unicodeVersion": 3.2
    }, {
        "names": ["white_medium_square"],
        "surrogates": "◻️",
        "unicodeVersion": 3.2
    }, {
        "names": ["black_large_square"],
        "surrogates": "⬛",
        "unicodeVersion": 5.1
    }, {
        "names": ["white_large_square"],
        "surrogates": "⬜",
        "unicodeVersion": 5.1
    }, {
        "names": ["orange_square"],
        "surrogates": "🟧",
        "unicodeVersion": 12
    }, {
        "names": ["blue_square"],
        "surrogates": "🟦",
        "unicodeVersion": 12
    }, {
        "names": ["red_square"],
        "surrogates": "🟥",
        "unicodeVersion": 12
    }, {
        "names": ["brown_square"],
        "surrogates": "🟫",
        "unicodeVersion": 12
    }, {
        "names": ["purple_square"],
        "surrogates": "🟪",
        "unicodeVersion": 12
    }, {
        "names": ["green_square"],
        "surrogates": "🟩",
        "unicodeVersion": 12
    }, {
        "names": ["yellow_square"],
        "surrogates": "🟨",
        "unicodeVersion": 12
    }, {
        "names": ["speaker"],
        "surrogates": "🔈",
        "unicodeVersion": 6
    }, {
        "names": ["mute"],
        "surrogates": "🔇",
        "unicodeVersion": 6
    }, {
        "names": ["sound"],
        "surrogates": "🔉",
        "unicodeVersion": 6
    }, {
        "names": ["loud_sound"],
        "surrogates": "🔊",
        "unicodeVersion": 6
    }, {
        "names": ["bell"],
        "surrogates": "🔔",
        "unicodeVersion": 6
    }, {
        "names": ["no_bell"],
        "surrogates": "🔕",
        "unicodeVersion": 6
    }, {
        "names": ["mega"],
        "surrogates": "📣",
        "unicodeVersion": 6
    }, {
        "names": ["loudspeaker"],
        "surrogates": "📢",
        "unicodeVersion": 6
    }, {
        "names": ["speech_left", "left_speech_bubble"],
        "surrogates": "🗨️",
        "unicodeVersion": 7
    }, {
        "names": ["eye_in_speech_bubble"],
        "surrogates": "👁‍🗨",
        "unicodeVersion": 7
    }, {
        "names": ["speech_balloon"],
        "surrogates": "💬",
        "unicodeVersion": 6
    }, {
        "names": ["thought_balloon"],
        "surrogates": "💭",
        "unicodeVersion": 6
    }, {
        "names": ["anger_right", "right_anger_bubble"],
        "surrogates": "🗯️",
        "unicodeVersion": 7
    }, {
        "names": ["spades"],
        "surrogates": "♠️",
        "unicodeVersion": 1.1
    }, {
        "names": ["clubs"],
        "surrogates": "♣️",
        "unicodeVersion": 1.1
    }, {
        "names": ["hearts"],
        "surrogates": "♥️",
        "unicodeVersion": 1.1
    }, {
        "names": ["diamonds"],
        "surrogates": "♦️",
        "unicodeVersion": 1.1
    }, {
        "names": ["black_joker"],
        "surrogates": "🃏",
        "unicodeVersion": 6
    }, {
        "names": ["flower_playing_cards"],
        "surrogates": "🎴",
        "unicodeVersion": 6
    }, {
        "names": ["mahjong"],
        "surrogates": "🀄",
        "unicodeVersion": 5.1
    }, {
        "names": ["clock1"],
        "surrogates": "🕐",
        "unicodeVersion": 6
    }, {
        "names": ["clock2"],
        "surrogates": "🕑",
        "unicodeVersion": 6
    }, {
        "names": ["clock3"],
        "surrogates": "🕒",
        "unicodeVersion": 6
    }, {
        "names": ["clock4"],
        "surrogates": "🕓",
        "unicodeVersion": 6
    }, {
        "names": ["clock5"],
        "surrogates": "🕔",
        "unicodeVersion": 6
    }, {
        "names": ["clock6"],
        "surrogates": "🕕",
        "unicodeVersion": 6
    }, {
        "names": ["clock7"],
        "surrogates": "🕖",
        "unicodeVersion": 6
    }, {
        "names": ["clock8"],
        "surrogates": "🕗",
        "unicodeVersion": 6
    }, {
        "names": ["clock9"],
        "surrogates": "🕘",
        "unicodeVersion": 6
    }, {
        "names": ["clock10"],
        "surrogates": "🕙",
        "unicodeVersion": 6
    }, {
        "names": ["clock11"],
        "surrogates": "🕚",
        "unicodeVersion": 6
    }, {
        "names": ["clock12"],
        "surrogates": "🕛",
        "unicodeVersion": 6
    }, {
        "names": ["clock130"],
        "surrogates": "🕜",
        "unicodeVersion": 6
    }, {
        "names": ["clock230"],
        "surrogates": "🕝",
        "unicodeVersion": 6
    }, {
        "names": ["clock330"],
        "surrogates": "🕞",
        "unicodeVersion": 6
    }, {
        "names": ["clock430"],
        "surrogates": "🕟",
        "unicodeVersion": 6
    }, {
        "names": ["clock530"],
        "surrogates": "🕠",
        "unicodeVersion": 6
    }, {
        "names": ["clock630"],
        "surrogates": "🕡",
        "unicodeVersion": 6
    }, {
        "names": ["clock730"],
        "surrogates": "🕢",
        "unicodeVersion": 6
    }, {
        "names": ["clock830"],
        "surrogates": "🕣",
        "unicodeVersion": 6
    }, {
        "names": ["clock930"],
        "surrogates": "🕤",
        "unicodeVersion": 6
    }, {
        "names": ["clock1030"],
        "surrogates": "🕥",
        "unicodeVersion": 6
    }, {
        "names": ["clock1130"],
        "surrogates": "🕦",
        "unicodeVersion": 6
    }, {
        "names": ["clock1230"],
        "surrogates": "🕧",
        "unicodeVersion": 6
    }, {
        "names": ["female_sign"],
        "surrogates": "♀️",
        "unicodeVersion": 1.1
    }, {
        "names": ["male_sign"],
        "surrogates": "♂️",
        "unicodeVersion": 1.1
    }, {
        "names": ["transgender_symbol"],
        "surrogates": "⚧",
        "unicodeVersion": 13
    }, {
        "names": ["medical_symbol"],
        "surrogates": "⚕️",
        "unicodeVersion": 4.1
    }, {
        "names": ["regional_indicator_z"],
        "surrogates": "🇿",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_y"],
        "surrogates": "🇾",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_x"],
        "surrogates": "🇽",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_w"],
        "surrogates": "🇼",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_v"],
        "surrogates": "🇻",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_u"],
        "surrogates": "🇺",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_t"],
        "surrogates": "🇹",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_s"],
        "surrogates": "🇸",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_r"],
        "surrogates": "🇷",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_q"],
        "surrogates": "🇶",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_p"],
        "surrogates": "🇵",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_o"],
        "surrogates": "🇴",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_n"],
        "surrogates": "🇳",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_m"],
        "surrogates": "🇲",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_l"],
        "surrogates": "🇱",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_k"],
        "surrogates": "🇰",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_j"],
        "surrogates": "🇯",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_i"],
        "surrogates": "🇮",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_h"],
        "surrogates": "🇭",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_g"],
        "surrogates": "🇬",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_f"],
        "surrogates": "🇫",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_e"],
        "surrogates": "🇪",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_d"],
        "surrogates": "🇩",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_c"],
        "surrogates": "🇨",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_b"],
        "surrogates": "🇧",
        "unicodeVersion": 6
    }, {
        "names": ["regional_indicator_a"],
        "surrogates": "🇦",
        "unicodeVersion": 6
    }],
    "flags": [{
        "names": ["flag_white"],
        "surrogates": "🏳️",
        "unicodeVersion": 7
    }, {
        "names": ["flag_black"],
        "surrogates": "🏴",
        "unicodeVersion": 7
    }, {
        "names": ["checkered_flag"],
        "surrogates": "🏁",
        "unicodeVersion": 6
    }, {
        "names": ["triangular_flag_on_post"],
        "surrogates": "🚩",
        "unicodeVersion": 6
    }, {
        "names": ["rainbow_flag", "gay_pride_flag"],
        "surrogates": "🏳️‍🌈",
        "unicodeVersion": 7
    }, {
        "names": ["transgender_flag"],
        "surrogates": "🏳️‍⚧️",
        "unicodeVersion": 13
    }, {
        "names": ["pirate_flag"],
        "surrogates": "🏴‍☠️",
        "unicodeVersion": 11
    }, {
        "names": ["flag_af"],
        "surrogates": "🇦🇫",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ax"],
        "surrogates": "🇦🇽",
        "unicodeVersion": 6
    }, {
        "names": ["flag_al"],
        "surrogates": "🇦🇱",
        "unicodeVersion": 6
    }, {
        "names": ["flag_dz"],
        "surrogates": "🇩🇿",
        "unicodeVersion": 6
    }, {
        "names": ["flag_as"],
        "surrogates": "🇦🇸",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ad"],
        "surrogates": "🇦🇩",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ao"],
        "surrogates": "🇦🇴",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ai"],
        "surrogates": "🇦🇮",
        "unicodeVersion": 6
    }, {
        "names": ["flag_aq"],
        "surrogates": "🇦🇶",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ag"],
        "surrogates": "🇦🇬",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ar"],
        "surrogates": "🇦🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_am"],
        "surrogates": "🇦🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_aw"],
        "surrogates": "🇦🇼",
        "unicodeVersion": 6
    }, {
        "names": ["flag_au"],
        "surrogates": "🇦🇺",
        "unicodeVersion": 6
    }, {
        "names": ["flag_at"],
        "surrogates": "🇦🇹",
        "unicodeVersion": 6
    }, {
        "names": ["flag_az"],
        "surrogates": "🇦🇿",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bs"],
        "surrogates": "🇧🇸",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bh"],
        "surrogates": "🇧🇭",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bd"],
        "surrogates": "🇧🇩",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bb"],
        "surrogates": "🇧🇧",
        "unicodeVersion": 6
    }, {
        "names": ["flag_by"],
        "surrogates": "🇧🇾",
        "unicodeVersion": 6
    }, {
        "names": ["flag_be"],
        "surrogates": "🇧🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bz"],
        "surrogates": "🇧🇿",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bj"],
        "surrogates": "🇧🇯",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bm"],
        "surrogates": "🇧🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bt"],
        "surrogates": "🇧🇹",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bo"],
        "surrogates": "🇧🇴",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ba"],
        "surrogates": "🇧🇦",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bw"],
        "surrogates": "🇧🇼",
        "unicodeVersion": 6
    }, {
        "names": ["flag_br"],
        "surrogates": "🇧🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_io"],
        "surrogates": "🇮🇴",
        "unicodeVersion": 6
    }, {
        "names": ["flag_vg"],
        "surrogates": "🇻🇬",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bn"],
        "surrogates": "🇧🇳",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bg"],
        "surrogates": "🇧🇬",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bf"],
        "surrogates": "🇧🇫",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bi"],
        "surrogates": "🇧🇮",
        "unicodeVersion": 6
    }, {
        "names": ["flag_kh"],
        "surrogates": "🇰🇭",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cm"],
        "surrogates": "🇨🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ca"],
        "surrogates": "🇨🇦",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ic"],
        "surrogates": "🇮🇨",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cv"],
        "surrogates": "🇨🇻",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bq"],
        "surrogates": "🇧🇶",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ky"],
        "surrogates": "🇰🇾",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cf"],
        "surrogates": "🇨🇫",
        "unicodeVersion": 6
    }, {
        "names": ["flag_td"],
        "surrogates": "🇹🇩",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cl"],
        "surrogates": "🇨🇱",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cn"],
        "surrogates": "🇨🇳",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cx"],
        "surrogates": "🇨🇽",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cc"],
        "surrogates": "🇨🇨",
        "unicodeVersion": 6
    }, {
        "names": ["flag_co"],
        "surrogates": "🇨🇴",
        "unicodeVersion": 6
    }, {
        "names": ["flag_km"],
        "surrogates": "🇰🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cg"],
        "surrogates": "🇨🇬",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cd"],
        "surrogates": "🇨🇩",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ck"],
        "surrogates": "🇨🇰",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cr"],
        "surrogates": "🇨🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ci"],
        "surrogates": "🇨🇮",
        "unicodeVersion": 6
    }, {
        "names": ["flag_hr"],
        "surrogates": "🇭🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cu"],
        "surrogates": "🇨🇺",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cw"],
        "surrogates": "🇨🇼",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cy"],
        "surrogates": "🇨🇾",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cz"],
        "surrogates": "🇨🇿",
        "unicodeVersion": 6
    }, {
        "names": ["flag_dk"],
        "surrogates": "🇩🇰",
        "unicodeVersion": 6
    }, {
        "names": ["flag_dj"],
        "surrogates": "🇩🇯",
        "unicodeVersion": 6
    }, {
        "names": ["flag_dm"],
        "surrogates": "🇩🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_do"],
        "surrogates": "🇩🇴",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ec"],
        "surrogates": "🇪🇨",
        "unicodeVersion": 6
    }, {
        "names": ["flag_eg"],
        "surrogates": "🇪🇬",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sv"],
        "surrogates": "🇸🇻",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gq"],
        "surrogates": "🇬🇶",
        "unicodeVersion": 6
    }, {
        "names": ["flag_er"],
        "surrogates": "🇪🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ee"],
        "surrogates": "🇪🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_et"],
        "surrogates": "🇪🇹",
        "unicodeVersion": 6
    }, {
        "names": ["flag_eu"],
        "surrogates": "🇪🇺",
        "unicodeVersion": 6
    }, {
        "names": ["flag_fk"],
        "surrogates": "🇫🇰",
        "unicodeVersion": 6
    }, {
        "names": ["flag_fo"],
        "surrogates": "🇫🇴",
        "unicodeVersion": 6
    }, {
        "names": ["flag_fj"],
        "surrogates": "🇫🇯",
        "unicodeVersion": 6
    }, {
        "names": ["flag_fi"],
        "surrogates": "🇫🇮",
        "unicodeVersion": 6
    }, {
        "names": ["flag_fr"],
        "surrogates": "🇫🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gf"],
        "surrogates": "🇬🇫",
        "unicodeVersion": 6
    }, {
        "names": ["flag_pf"],
        "surrogates": "🇵🇫",
        "unicodeVersion": 6
    }, {
        "names": ["flag_tf"],
        "surrogates": "🇹🇫",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ga"],
        "surrogates": "🇬🇦",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gm"],
        "surrogates": "🇬🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ge"],
        "surrogates": "🇬🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_de"],
        "surrogates": "🇩🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gh"],
        "surrogates": "🇬🇭",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gi"],
        "surrogates": "🇬🇮",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gr"],
        "surrogates": "🇬🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gl"],
        "surrogates": "🇬🇱",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gd"],
        "surrogates": "🇬🇩",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gp"],
        "surrogates": "🇬🇵",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gu"],
        "surrogates": "🇬🇺",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gt"],
        "surrogates": "🇬🇹",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gg"],
        "surrogates": "🇬🇬",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gn"],
        "surrogates": "🇬🇳",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gw"],
        "surrogates": "🇬🇼",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gy"],
        "surrogates": "🇬🇾",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ht"],
        "surrogates": "🇭🇹",
        "unicodeVersion": 6
    }, {
        "names": ["flag_hn"],
        "surrogates": "🇭🇳",
        "unicodeVersion": 6
    }, {
        "names": ["flag_hk"],
        "surrogates": "🇭🇰",
        "unicodeVersion": 6
    }, {
        "names": ["flag_hu"],
        "surrogates": "🇭🇺",
        "unicodeVersion": 6
    }, {
        "names": ["flag_is"],
        "surrogates": "🇮🇸",
        "unicodeVersion": 6
    }, {
        "names": ["flag_in"],
        "surrogates": "🇮🇳",
        "unicodeVersion": 6
    }, {
        "names": ["flag_id"],
        "surrogates": "🇮🇩",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ir"],
        "surrogates": "🇮🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_iq"],
        "surrogates": "🇮🇶",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ie"],
        "surrogates": "🇮🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_im"],
        "surrogates": "🇮🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_il"],
        "surrogates": "🇮🇱",
        "unicodeVersion": 6
    }, {
        "names": ["flag_it"],
        "surrogates": "🇮🇹",
        "unicodeVersion": 6
    }, {
        "names": ["flag_jm"],
        "surrogates": "🇯🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_jp"],
        "surrogates": "🇯🇵",
        "unicodeVersion": 6
    }, {
        "names": ["crossed_flags"],
        "surrogates": "🎌",
        "unicodeVersion": 6
    }, {
        "names": ["flag_je"],
        "surrogates": "🇯🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_jo"],
        "surrogates": "🇯🇴",
        "unicodeVersion": 6
    }, {
        "names": ["flag_kz"],
        "surrogates": "🇰🇿",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ke"],
        "surrogates": "🇰🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ki"],
        "surrogates": "🇰🇮",
        "unicodeVersion": 6
    }, {
        "names": ["flag_xk"],
        "surrogates": "🇽🇰",
        "unicodeVersion": 6
    }, {
        "names": ["flag_kw"],
        "surrogates": "🇰🇼",
        "unicodeVersion": 6
    }, {
        "names": ["flag_kg"],
        "surrogates": "🇰🇬",
        "unicodeVersion": 6
    }, {
        "names": ["flag_la"],
        "surrogates": "🇱🇦",
        "unicodeVersion": 6
    }, {
        "names": ["flag_lv"],
        "surrogates": "🇱🇻",
        "unicodeVersion": 6
    }, {
        "names": ["flag_lb"],
        "surrogates": "🇱🇧",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ls"],
        "surrogates": "🇱🇸",
        "unicodeVersion": 6
    }, {
        "names": ["flag_lr"],
        "surrogates": "🇱🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ly"],
        "surrogates": "🇱🇾",
        "unicodeVersion": 6
    }, {
        "names": ["flag_li"],
        "surrogates": "🇱🇮",
        "unicodeVersion": 6
    }, {
        "names": ["flag_lt"],
        "surrogates": "🇱🇹",
        "unicodeVersion": 6
    }, {
        "names": ["flag_lu"],
        "surrogates": "🇱🇺",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mo"],
        "surrogates": "🇲🇴",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mk"],
        "surrogates": "🇲🇰",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mg"],
        "surrogates": "🇲🇬",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mw"],
        "surrogates": "🇲🇼",
        "unicodeVersion": 6
    }, {
        "names": ["flag_my"],
        "surrogates": "🇲🇾",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mv"],
        "surrogates": "🇲🇻",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ml"],
        "surrogates": "🇲🇱",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mt"],
        "surrogates": "🇲🇹",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mh"],
        "surrogates": "🇲🇭",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mq"],
        "surrogates": "🇲🇶",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mr"],
        "surrogates": "🇲🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mu"],
        "surrogates": "🇲🇺",
        "unicodeVersion": 6
    }, {
        "names": ["flag_yt"],
        "surrogates": "🇾🇹",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mx"],
        "surrogates": "🇲🇽",
        "unicodeVersion": 6
    }, {
        "names": ["flag_fm"],
        "surrogates": "🇫🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_md"],
        "surrogates": "🇲🇩",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mc"],
        "surrogates": "🇲🇨",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mn"],
        "surrogates": "🇲🇳",
        "unicodeVersion": 6
    }, {
        "names": ["flag_me"],
        "surrogates": "🇲🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ms"],
        "surrogates": "🇲🇸",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ma"],
        "surrogates": "🇲🇦",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mz"],
        "surrogates": "🇲🇿",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mm"],
        "surrogates": "🇲🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_na"],
        "surrogates": "🇳🇦",
        "unicodeVersion": 6
    }, {
        "names": ["flag_nr"],
        "surrogates": "🇳🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_np"],
        "surrogates": "🇳🇵",
        "unicodeVersion": 6
    }, {
        "names": ["flag_nl"],
        "surrogates": "🇳🇱",
        "unicodeVersion": 6
    }, {
        "names": ["flag_nc"],
        "surrogates": "🇳🇨",
        "unicodeVersion": 6
    }, {
        "names": ["flag_nz"],
        "surrogates": "🇳🇿",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ni"],
        "surrogates": "🇳🇮",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ne"],
        "surrogates": "🇳🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ng"],
        "surrogates": "🇳🇬",
        "unicodeVersion": 6
    }, {
        "names": ["flag_nu"],
        "surrogates": "🇳🇺",
        "unicodeVersion": 6
    }, {
        "names": ["flag_nf"],
        "surrogates": "🇳🇫",
        "unicodeVersion": 6
    }, {
        "names": ["flag_kp"],
        "surrogates": "🇰🇵",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mp"],
        "surrogates": "🇲🇵",
        "unicodeVersion": 6
    }, {
        "names": ["flag_no"],
        "surrogates": "🇳🇴",
        "unicodeVersion": 6
    }, {
        "names": ["flag_om"],
        "surrogates": "🇴🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_pk"],
        "surrogates": "🇵🇰",
        "unicodeVersion": 6
    }, {
        "names": ["flag_pw"],
        "surrogates": "🇵🇼",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ps"],
        "surrogates": "🇵🇸",
        "unicodeVersion": 6
    }, {
        "names": ["flag_pa"],
        "surrogates": "🇵🇦",
        "unicodeVersion": 6
    }, {
        "names": ["flag_pg"],
        "surrogates": "🇵🇬",
        "unicodeVersion": 6
    }, {
        "names": ["flag_py"],
        "surrogates": "🇵🇾",
        "unicodeVersion": 6
    }, {
        "names": ["flag_pe"],
        "surrogates": "🇵🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ph"],
        "surrogates": "🇵🇭",
        "unicodeVersion": 6
    }, {
        "names": ["flag_pn"],
        "surrogates": "🇵🇳",
        "unicodeVersion": 6
    }, {
        "names": ["flag_pl"],
        "surrogates": "🇵🇱",
        "unicodeVersion": 6
    }, {
        "names": ["flag_pt"],
        "surrogates": "🇵🇹",
        "unicodeVersion": 6
    }, {
        "names": ["flag_pr"],
        "surrogates": "🇵🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_qa"],
        "surrogates": "🇶🇦",
        "unicodeVersion": 6
    }, {
        "names": ["flag_re"],
        "surrogates": "🇷🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ro"],
        "surrogates": "🇷🇴",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ru"],
        "surrogates": "🇷🇺",
        "unicodeVersion": 6
    }, {
        "names": ["flag_rw"],
        "surrogates": "🇷🇼",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ws"],
        "surrogates": "🇼🇸",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sm"],
        "surrogates": "🇸🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_st"],
        "surrogates": "🇸🇹",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sa"],
        "surrogates": "🇸🇦",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sn"],
        "surrogates": "🇸🇳",
        "unicodeVersion": 6
    }, {
        "names": ["flag_rs"],
        "surrogates": "🇷🇸",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sc"],
        "surrogates": "🇸🇨",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sl"],
        "surrogates": "🇸🇱",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sg"],
        "surrogates": "🇸🇬",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sx"],
        "surrogates": "🇸🇽",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sk"],
        "surrogates": "🇸🇰",
        "unicodeVersion": 6
    }, {
        "names": ["flag_si"],
        "surrogates": "🇸🇮",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gs"],
        "surrogates": "🇬🇸",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sb"],
        "surrogates": "🇸🇧",
        "unicodeVersion": 6
    }, {
        "names": ["flag_so"],
        "surrogates": "🇸🇴",
        "unicodeVersion": 6
    }, {
        "names": ["flag_za"],
        "surrogates": "🇿🇦",
        "unicodeVersion": 6
    }, {
        "names": ["flag_kr"],
        "surrogates": "🇰🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ss"],
        "surrogates": "🇸🇸",
        "unicodeVersion": 6
    }, {
        "names": ["flag_es"],
        "surrogates": "🇪🇸",
        "unicodeVersion": 6
    }, {
        "names": ["flag_lk"],
        "surrogates": "🇱🇰",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bl"],
        "surrogates": "🇧🇱",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sh"],
        "surrogates": "🇸🇭",
        "unicodeVersion": 6
    }, {
        "names": ["flag_kn"],
        "surrogates": "🇰🇳",
        "unicodeVersion": 6
    }, {
        "names": ["flag_lc"],
        "surrogates": "🇱🇨",
        "unicodeVersion": 6
    }, {
        "names": ["flag_pm"],
        "surrogates": "🇵🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_vc"],
        "surrogates": "🇻🇨",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sd"],
        "surrogates": "🇸🇩",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sr"],
        "surrogates": "🇸🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sz"],
        "surrogates": "🇸🇿",
        "unicodeVersion": 6
    }, {
        "names": ["flag_se"],
        "surrogates": "🇸🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ch"],
        "surrogates": "🇨🇭",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sy"],
        "surrogates": "🇸🇾",
        "unicodeVersion": 6
    }, {
        "names": ["flag_tw"],
        "surrogates": "🇹🇼",
        "unicodeVersion": 6
    }, {
        "names": ["flag_tj"],
        "surrogates": "🇹🇯",
        "unicodeVersion": 6
    }, {
        "names": ["flag_tz"],
        "surrogates": "🇹🇿",
        "unicodeVersion": 6
    }, {
        "names": ["flag_th"],
        "surrogates": "🇹🇭",
        "unicodeVersion": 6
    }, {
        "names": ["flag_tl"],
        "surrogates": "🇹🇱",
        "unicodeVersion": 6
    }, {
        "names": ["flag_tg"],
        "surrogates": "🇹🇬",
        "unicodeVersion": 6
    }, {
        "names": ["flag_tk"],
        "surrogates": "🇹🇰",
        "unicodeVersion": 6
    }, {
        "names": ["flag_to"],
        "surrogates": "🇹🇴",
        "unicodeVersion": 6
    }, {
        "names": ["flag_tt"],
        "surrogates": "🇹🇹",
        "unicodeVersion": 6
    }, {
        "names": ["flag_tn"],
        "surrogates": "🇹🇳",
        "unicodeVersion": 6
    }, {
        "names": ["flag_tr"],
        "surrogates": "🇹🇷",
        "unicodeVersion": 6
    }, {
        "names": ["flag_tm"],
        "surrogates": "🇹🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_tc"],
        "surrogates": "🇹🇨",
        "unicodeVersion": 6
    }, {
        "names": ["flag_vi"],
        "surrogates": "🇻🇮",
        "unicodeVersion": 6
    }, {
        "names": ["flag_tv"],
        "surrogates": "🇹🇻",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ug"],
        "surrogates": "🇺🇬",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ua"],
        "surrogates": "🇺🇦",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ae"],
        "surrogates": "🇦🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_gb"],
        "surrogates": "🇬🇧",
        "unicodeVersion": 6
    }, {
        "names": ["england"],
        "surrogates": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "unicodeVersion": 7
    }, {
        "names": ["scotland"],
        "surrogates": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "unicodeVersion": 7
    }, {
        "names": ["wales"],
        "surrogates": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        "unicodeVersion": 7
    }, {
        "names": ["flag_us"],
        "surrogates": "🇺🇸",
        "unicodeVersion": 6
    }, {
        "names": ["flag_uy"],
        "surrogates": "🇺🇾",
        "unicodeVersion": 6
    }, {
        "names": ["flag_uz"],
        "surrogates": "🇺🇿",
        "unicodeVersion": 6
    }, {
        "names": ["flag_vu"],
        "surrogates": "🇻🇺",
        "unicodeVersion": 6
    }, {
        "names": ["flag_va"],
        "surrogates": "🇻🇦",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ve"],
        "surrogates": "🇻🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_vn"],
        "surrogates": "🇻🇳",
        "unicodeVersion": 6
    }, {
        "names": ["flag_wf"],
        "surrogates": "🇼🇫",
        "unicodeVersion": 6
    }, {
        "names": ["flag_eh"],
        "surrogates": "🇪🇭",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ye"],
        "surrogates": "🇾🇪",
        "unicodeVersion": 6
    }, {
        "names": ["flag_zm"],
        "surrogates": "🇿🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_zw"],
        "surrogates": "🇿🇼",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ac"],
        "surrogates": "🇦🇨",
        "unicodeVersion": 6
    }, {
        "names": ["flag_bv"],
        "surrogates": "🇧🇻",
        "unicodeVersion": 6
    }, {
        "names": ["flag_cp"],
        "surrogates": "🇨🇵",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ea"],
        "surrogates": "🇪🇦",
        "unicodeVersion": 6
    }, {
        "names": ["flag_dg"],
        "surrogates": "🇩🇬",
        "unicodeVersion": 6
    }, {
        "names": ["flag_hm"],
        "surrogates": "🇭🇲",
        "unicodeVersion": 6
    }, {
        "names": ["flag_mf"],
        "surrogates": "🇲🇫",
        "unicodeVersion": 6
    }, {
        "names": ["flag_sj"],
        "surrogates": "🇸🇯",
        "unicodeVersion": 6
    }, {
        "names": ["flag_ta"],
        "surrogates": "🇹🇦",
        "unicodeVersion": 6
    }, {
        "names": ["flag_um"],
        "surrogates": "🇺🇲",
        "unicodeVersion": 6
    }, {
        "names": ["united_nations"],
        "surrogates": "🇺🇳",
        "unicodeVersion": 6
    }]
};

const shortcutDefinitions: ShortcutDefs = [{
    "emoji": "angry",
    "shortcuts": [">:(", ">:-(", ">=(", ">=-("]
}, {
    "emoji": "blush",
    "shortcuts": [":\")", ":-\")", "=\")", "=-\")"]
}, {
    "emoji": "broken_heart",
    "shortcuts": ["</3", "<\\3"]
}, {
    "emoji": "confused",
    "shortcuts": [":-\\", ":-/", "=-\\", "=-/"]
}, {
    "emoji": "cry",
    "shortcuts": [":'(", ":'-(", ":,(", ":,-(", "='(", "='-(", "=,(", "=,-("]
}, {
    "emoji": "frowning",
    "shortcuts": [":(", ":-(", "=(", "=-("]
}, {
    "emoji": "heart",
    "shortcuts": ["<3", "♡"]
}, {
    "emoji": "imp",
    "shortcuts": ["]:(", "]:-(", "]=(", "]=-("]
}, {
    "emoji": "innocent",
    "shortcuts": ["o:)", "O:)", "o:-)", "O:-)", "0:)", "0:-)", "o=)", "O=)", "o=-)", "O=-)", "0=)", "0=-)"]
}, {
    "emoji": "joy",
    "shortcuts": [":')", ":'-)", ":,)", ":,-)", ":'D", ":'-D", ":,D", ":,-D", "=')", "='-)", "=,)", "=,-)", "='D", "='-D", "=,D", "=,-D"]
}, {
    "emoji": "kissing",
    "shortcuts": [":*", ":-*", "=*", "=-*"]
}, {
    "emoji": "laughing",
    "shortcuts": ["x-)", "X-)"]
}, {
    "emoji": "neutral_face",
    "shortcuts": [":|", ":-|", "=|", "=-|"]
}, {
    "emoji": "open_mouth",
    "shortcuts": [":o", ":-o", ":O", ":-O", "=o", "=-o", "=O", "=-O"]
}, {
    "emoji": "rage",
    "shortcuts": [":@", ":-@", "=@", "=-@"]
}, {
    "emoji": "smile",
    "shortcuts": [":D", ":-D", "=D", "=-D"]
}, {
    "emoji": "slight_smile",
    "shortcuts": [":)", ":-)", "=)", "=-)"]
}, {
    "emoji": "smiling_imp",
    "shortcuts": ["]:)", "]:-)", "]=)", "]=-)"]
}, {
    "emoji": "sob",
    "shortcuts": [":,'(", ":,'-(", ";(", ";-(", "=,'(", "=,'-("]
}, {
    "emoji": "stuck_out_tongue",
    "shortcuts": [":P", ":-P", "=P", "=-P"]
}, {
    "emoji": "sunglasses",
    "shortcuts": ["8-)", "B-)"]
}, {
    "emoji": "sweat",
    "shortcuts": [",:(", ",:-(", ",=(", ",=-("]
}, {
    "emoji": "sweat_smile",
    "shortcuts": [",:)", ",:-)", ",=)", ",=-)"]
}, {
    "emoji": "unamused",
    "shortcuts": [":s", ":-S", ":z", ":-Z", ":$", ":-$", "=s", "=-S", "=z", "=-Z", "=$", "=-$"]
}, {
    "emoji": "wink",
    "shortcuts": [";)", ";-)"]
}];

const skinTones = {
    'skin-tone-1': String.fromCodePoint(0x1F3FB),
    'skin-tone-2': String.fromCodePoint(0x1F3FC),
    'skin-tone-3': String.fromCodePoint(0x1F3FD),
    'skin-tone-4': String.fromCodePoint(0x1F3FE),
    'skin-tone-5': String.fromCodePoint(0x1F3FF),
};

const codePointToSkinTone = {
    '1f3fb': 'skin-tone-1',
    '1f3fc': 'skin-tone-2',
    '1f3fd': 'skin-tone-3',
    '1f3fe': 'skin-tone-4',
    '1f3ff': 'skin-tone-5',
};

const emotesByName = new Map<string, string>();

function toUtf32CodePoints(str: string): number[] {
    return Array.from(str).map(e => e.codePointAt(0));
}

function pad(n: string, width: number, z: string = '0') {
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

for (const [category, emotes] of Object.entries(emoteDefinitions)) {
    for (const emote of emotes) {
        for (const name of emote.names) {
            emotesByName.set(`:${name}:`, emote.surrogates);
        }

        if (emote.hasDiversity) {
            for (const diversity of emote.diversityChildren) {
                for (const name of diversity.names) {
                    emotesByName.set(`:${name}:`, diversity.surrogates);
                }
            }

            for (const [skinCode, skinSurrogate] of Object.entries(skinTones)) {
                for (const name of emote.names) {
                    emotesByName.set(`:${name}::${skinCode}:`, emote.surrogates + skinSurrogate);
                }
            }
        }

        if (emote.hasMultiDiversity) {
            for (const diversity of emote.diversityChildren) {
                for (const name of diversity.names) {
                    emotesByName.set(`:${name}:`, diversity.surrogates);
                }

                const skinCodes = diversity.diversity.map(codePoint => `:${codePointToSkinTone[codePoint]}:`).join('');
                const skinSurrogates = diversity.diversity.map(codePoint => skinTones[codePointToSkinTone[codePoint]]).join('');

                for (const name of emote.names) {
                    emotesByName.set(`:${name}::${skinCodes}:`, emote.surrogates + skinSurrogates);
                }
            }
        }
    }
}

for (const shortcutDef of shortcutDefinitions) {
    for (const shortcut of shortcutDef.shortcuts) {
        emotesByName.set(shortcut, emotesByName.get(`:${shortcutDef.emoji}:`));
    }
}

const output = [];
for (const [shorthand, unicode] of emotesByName) {
    output.push(`                [${JSON.stringify(shorthand)}] = "${toUtf32CodePoints(unicode).map(s => '\\U' + pad(s.toString(16), 8)).join('')}",`);
}

console.log(output.sort().join('\n'));
