---
title: COMP 376
---

2018 Fall


## Outline

### Instructor
* Instructor: Nicolas Bergeron
* Office: EV 003.301
* Email: bergeron@encs.concordia.ca
* Office hours: By Appointment (email 24h in advance)

### Textbook
Creating Games: Mechanics, Content, and Technology by Morgan McGuire and Odest Chadwicke Jenkins, AK Peters/CRC Press, 2008, ISBN-10: 1568813058

### Grading
* Assignments		34% (A1: 4%; A2: 15%; A3: 15%)
* Quiz		        25%
* Team Project		35%		 								
* Written critiques 6% 
* Final     		0% (No final)

---

## Game Development Fundamentals

### Properties of a Game

* Players
* Goals (say winning/losing)
* Choices that affect the outcome
* Rules
* Consequences of winning or losing that are optional

### Essential Elements of a Game

1. Paly Activity (Nonessential, recreational activity)
    * Play activity requires participation
    * Making different choices while playing the game a second time affects the results
2. Pretending (Mental ability to establish a notional reality)
    * Creates an artificial reality known as the magic circle
    * To leave the magic circle, stop playing the game
3. Goal (Desired result or condition the player seeks to achieve)
    * Every game must have a nontrivial goal or object
    * The rules define the goal
    * The player must overcome one or more challenges to achieve the goal
4. Rules
    * Rules are definitions and instructions that players accept for the game
    * Rules define the actions the players may select that will help them achieve the object of the game
    * Game designers must make the rules understandable to the player 

### Fundamental Characteristics of Games

1. Representation: A game is a closed formal system that represents a subset of reality + some fantasy.
    * A game is complete and self-sufficient.
    * Rules which are either explicit or implicit.
    * Collection of parts that interact with each other, often in complex ways.
    * Attempts to recreate or simulate some elements of reality, and allows fantasy to fill in the rest. 
2. Interaction
    * Some media for representing reality are static. 
        * E.g. photos, paintings, sculptures, etc.
    * Some are dynamic and change over time. 
        * E.g. movies, music, etc.
    * Games go even further and represent reality in an interactive fashion.
        * Players are allowed to directly affect other players and “reality” itself through their actions.
3. Conflict
    * Conflict arises naturally from the interaction of a game; conflict need not be violent.
    * The player actively pursues some goal while obstacles prevent goals from being easily achieved. Sources of conflict include:
        * Other players (including any computer agents)
        * Elements of the game environment
        * Time (in the case of races, etc.)
        * The player’s own self (in the case of puzzles, etc.)
4. Safety
    * Conflict implies danger; danger means risk of harm; harm is undesirable.
    * A game is a safe way to experience reality.
    * The results of a game should always be less harsh than the real world situations which the game models.
    * Safety, ironically, is the one element of games that players are willing to sacrifice to enhance the overall experience.

### Things That a Game Need Not Have
* Competition
* Conflict
* Entertainment
* Fun

### Characterizing Games
* Levels of Abstraction
    * Fiction
        * Fiction is the story the player is told; rationale for the game world.
        * Fiction draws the player into the game world and immerses the player.
        * Immersed players lose track of the real world outside the game.
        * Immersion can be
            * Tactical—the sense of being “in the groove”
            * Strategic—observing, calculating, planning
            * Narrative—the feeling of being inside a story
    * Player’s mental model
        * Mental model is the set of rules and data that the player infers and uses to make decisions.
        * Most often
            * The player must overcome a nontrivial challenge
            * Challenges require mental or physical effort
            * A challenge can be composed of several smaller challenges
            * Challenges can be required to reach the goal or optional to add game content

    * Abstract
        * Defined by the real rules, not merely players perception or fiction surrounding them.
        * Unlike other games (e.g., board games), video games often do not require written rules. 
            * The game enforces the rules. The player can’t change the rules
            * Games must provide adequate clues for players to overcome a challenge
            * Using trial and error to overcome a challenge frustrates many players
            * Discovering rules as the play progresses is part of the challenge in playing most video games.

### Progression and Emergence

* People love to create, design, and customize.

* This activity can have a direct effect on gameplay.

* Games allow experience to emerge from interactions with the game environment.

* There are two main ways the gameplay can evolve in a game:

    * Progression: the gameplay experience follows a script or plot. Also includes non-linear story telling.
    * Emergence: the complexity of the gameplay comes from the combination of simple elements. It makes games powerful, but is hard to design.

* If the game controls progression through the game world via a well defined plot, it is (typically) less emergent gameplay. In essence, in a progressive game, the player is playing against the designer.

* Emergence is difficult to design (and playtest). In an emergent game, the player is playing against the environment.

* Most games have more progression than emergence.

* As video games reach a wider audience, creative and expressive play become increasingly important.

---

## Key Components and Processes in Game Development

### Game Genres	and	Characteristics
* Adventure Games—exploration and puzzle-solving challenges
    * Generally	story-based	games that rely	upon puzzle	solving	to move	the	story along.
* Action	Games—physical	challenges
    * Real-time	games	that	require	quick	reactions	to	what	is	happening.
    * Far	less	cerebral	than	adventure	games.
* Role-Playing Games(RPGs)—tactical, logistical, exploration, and economic challenges
    * The	gamer	generally	directs	a	group	of	heroes	on	a	series	of	
quests.
    * Fantasy	RPGs	feature	complex	magical	systems	and	diverse	races	
of	characters.
* Strategy	Games—strategic,	tactical,	and	logistical	challenges
    * Players must manage a limited	set	of resources to	achieve	a predetermined	goal.
    * Can	be	either	turn-based	or	real-time.
    * Opponents	can	be computer generated, human players, or some combination	of	the	two.
* Real-world	Simulations	(vehicle	simulations)—physical	and	tactical	challenges
    * Attempt to	emulate	real world	operating conditions with great detail.
    * Most	simulate	some	kind	of	complex	machinery,	such as	aircraft, tanks,	cars,	and	so	on.
    * Not	all	simulations	are	so	serious.
* Sports	Games—physical	and	tactical	challenges	
    * Allow	players	to	participate	in	a sporting event or	activity of	some kind.
    * Prowess	in	the	real	sport	does	not	translate	to	the	video	game, but	that is	the	point!
    * Must	accurately	and	realistically	reproduce	the	rules	and	strategies	of	the	sport.
* Fighting	Games	(Sports)
    * Players	control	figures	on	the	screen	and	use	a	combination	of	moves	to	attack	opponents	and	defend	from	attacks.
    * Games	are	generally	viewed	from	the	side.
* Puzzle	Games—logic	and	conceptual	challenges
    * Puzzle	games	exist	purely	for	the	intellectual	challenge	of	problem	solving.
    * The	puzzles	are	an	end	in	themselves	and	are	not	integrated	into	a	story,	as	is	the	case	with	adventure	games.
    * Puzzles	can	be	non	real-time	or	real-time
* Online	Games
    * Online	games	can	include	any	of	the	preceding	genres	but	their	distinguishing	feature	is	multiplayer	network	play.
    * Often,	communities	grow	around	these	games.
    * Online	gaming	is	still	relatively	immature,	with	many technical	and	business	difficulties	unsolved.
* Casual	Games
    * Casual	games	are	easy-to-play,	short	session	games	with	little	or	 no	learning	curve.
    * Players	are	already	familiar	with	the	rules	of	the	game	and	expect	them	to	be	followed	here.
    * Players	generally	want	to	drop	into	and	out	of	these	games	quickly.
* Educational	Games
    * Intended	to	teach	while	they	entertain	at	the	same	time.
    * These	games	are	generally	aimed	at	a	younger	audience	than	most	other	gaming	products.
* Serious	Games
    * The	premise	is	to	apply	game	design,	technologies,	and	skills	to	non-entertainment	applications.	This	includes:
        * Medical	applications.
        * Educational	applications.
        * Social	and	public	policy	applications.
        * Business	and	management	applications.
        * Military	applications.
        * Plus	many	other	types	of	simulations	and	applications.

### Brainstorming	and	Generating	Game	Ideas
* Game	Development	Initiation
    * First	path:	Pitching	your	game
        * Individual	->	team	->	management	->	publisher
        * Proposal	->	Design	->	prototype
        * Publisher	has	to	buy	into	your	game	idea.
    * Second	path:	Getting	a	contract	(need	good	reputation)
        * Publisher	->	developer
        * Essentially	pre-approved.
* Getting	an	Idea
* Brainstorming	Steps
    * Write	down	every	idea.
    * Do	not	criticize	other’s	ideas.
    * Set	a	time	limit.
    * Seed	the	discussion
    * Quantity	and	not	quality
    * Encourage	others
    * Seek	outrageous	and	humorous	ideas.
    * Build	on	and	by	modifying	existing	ideas 
* Generating	Game	Ideas
    * Approach	1: Start	with	genre,	setting,	premise,	&	overall	narrative
    * Approach	2: Start	with	gameplay	challenges	&	game	mechanics
    * Approach	3: Start	with	user	experience	(e.g.	see,	hear,	feel)

### From	Idea	to	Game	Concept
* What	Attitude	Do	You	Need

### Writing a Game Proposal

### Writing a Game Critiques
* The three steps/elements are:
    * Describe (Content:objective): Begin with an objecttive description of the game. Give information such as title, publisher, developer, year of publication, number of players, genre, and so on. Be unambiguous, and avoid subjective comments. Because space is limited, focus your description down to around one paragraph.
    * Analyze (Content: objective to subjective): Analysis is critical reasoning about one or more key aspects of the game; e.g.: primary gameplay mechanic, how the art style serves the theme, etc. The analysis should rely on proven facts, could be based on relation to known games, or from feedback from an experiment with players. Avoid judgments like "good" or "bad".
    * Conclude (Content: subjective): Make a subjective conclusion based on previous analysis; argue points such as the game is not fun (fun?, and how). The best conclusions are those that focus on how an element of the game achieves a goal such as balanced mechanics or effective narrative.
    
---

## Idea to Game: Main issues and Game critiquing

---

## Game design document and game technology

---

## Strategic Game Playing and Probability

---

## Game worlds and aesthetics, and Level Design

---

## Game balancing and mechanics

---

## User Input and basic AI

---

## 3D modeling and rendering

---

## Physics