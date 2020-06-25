# Gloom

Gloom is a WebGl-powerd, old-school first-person-shooter style game inspired by titles like wolfenstein 3-D 
and DOOM.

## The plan:
- Physics and the Pawn
- Level Editor!
  - Level File Loader
  - Layered Editor Grid
  - Tools (Paint, Erase)
  - Level File Save
  - Collision Editor
  - Light Editor
- Pointer lock and Mouselook
- UI System
  - GameScreens / PlayScreen
  - UISprite
  - UIAnimatedSprite
  - UI controls (bitmap text)
- Sound Engine
- Inventory system
- Weapons System
- Weapons (pistol, shotgun)
- Enemy pawns
- Enemy AI
- Entities
  - Trigger
  - Triggerables
    - Spawner (player, enemy)
    - Pickups (item, weapons, ammo, health, armor)
  - Info (level info - fog near/far, fog colour, music, sectorGroup size )
- Door locks, keys
- Doors (locked/unlocked)
- Health/Armor system
- Damage zones
- Impact particle effects
- Music
- Level Editor Enhancements
  - Add dragging capability to "paint" modes
  - Add light selector
  - Add tile texture selector
  - Entities
    - Info (level info - fog near/far, fog colour, music, sectorGroup size )
    - Trigger
    - Triggerables
      - Spawner (player, enemy)
      - Pickups (item, weapons, ammo, health, armor)
      - Delay
      - Conditional
- More Weapons (rocket launcher, rifle, BFG)
- More Enemy Pawns
- Main Menu screen
- Pause menu (play screen overlay)
- Loading screen
- Cutscene screen
- Additional Triggerables
  - Delay
  - Conditional
- Buttons/switches
- Optimizations
  - Sector groups (this includes converting sectors in sector groups to be one mesh)
  - Sector culling
- Dynamic lighting (Muzzle flash)

## Done So far:
- Project bootstrapping
- improved Build system
- Engine core (game loop, camera, scene)
-adding some utilities, rendering some geometry
- Messaging system
-DataManager ("global" data storage)
-InputHandler & Keyboard input
-Game class