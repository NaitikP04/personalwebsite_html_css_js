// Project Data Configuration System
const projectsData = {
    tacit: {
        projectId: 'tacit',
        title: 'Tacit - 4-Player Action RPG',
        subtitle: 'Software Developer at Goyangi Games',
        overview: 'Currently shipping core online multiplayer systems for Tacit, a 4-player action RPG targeting Steam Q4 2025.',
        techStack: ['Unreal Engine 5', 'C++', 'Gameplay Ability System', 'Networking'],
        slides: [
            {
                id: 'overview',
                type: 'image',
                media: './assets/projects/tacit/tacit-hero.png',
                title: 'Project Overview',
                description: 'Tacit is a 4-player action RPG built in Unreal Engine 5, featuring real-time combat and cooperative gameplay mechanics.',
                caption: 'Hero screenshot showcasing the game\'s visual style'
            },
            {
                id: 'construction',
                type: 'construction',
                title: 'More Content Coming Soon',
                description: '🚧 Additional screenshots and demos are under construction. Check back soon for spellcasting systems, combat mechanics, networking architecture, and more!',
                caption: 'More detailed project information coming soon'
            }
        ],
        externalLinks: {
            steam: 'https://store.steampowered.com/app/3670530/Tacit/'
        }
    },
    shooter: {
        projectId: 'shooter',
        title: 'Shooter? I Hardly Know Her',
        subtitle: 'Unity3D Multiplayer Capstone Project',
        overview: 'Unity3D online multiplayer shooter built in C# featuring core gameplay systems, enemy AI, and weapon spawner system.',
        techStack: ['Unity3D', 'C#', 'Networking', 'AI Systems'],
        slides: [
            {
                id: 'overview',
                type: 'image',
                media: './assets/projects/shooter/shooter.jpg',
                title: 'Game Overview',
                description: 'A fast-paced multiplayer shooter developed as a capstone project, featuring competitive gameplay and strategic weapon management.',
                caption: 'Main gameplay screenshot showing arena-style combat'
            },
            {
                id: 'trailer',
                type: 'youtube',
                media: 'https://youtu.be/S4y9hu_yzxk',
                videoId: 'S4y9hu_yzxk',
                thumbnail: './assets/projects/shooter/shooter.jpg',
                title: 'Gameplay Trailer',
                description: 'Watch the full gameplay trailer showcasing multiplayer action, weapon systems, and enemy AI in action.',
                caption: 'Official gameplay trailer featuring combat and multiplayer features'
            },
            {
                id: 'construction',
                type: 'construction',
                title: 'More Content Coming Soon',
                description: '🚧 Additional screenshots and demos are under construction. Check back soon for weapon systems, AI demonstrations, networking details, and playtesting results!',
                caption: 'More detailed project information coming soon'
            }
        ],
        externalLinks: {
            github: 'https://github.com/zchaplin/ShooterIHardlyKnowHer'
        }
    },
    automanora: {
        projectId: 'automanora',
        title: 'Automanora',
        subtitle: 'Award-Winning Puzzle Platformer',
        overview: 'A puzzle platformer featuring innovative mechanics, dynamic battery systems, and award-winning aesthetic design.',
        techStack: ['Unity', 'C#', 'Game Design', 'Level Design'],
        slides: [
            {
                id: 'overview',
                type: 'image',
                media: './assets/projects/automanora/Automanora.png',
                title: 'Game Overview',
                description: 'Automanora is a puzzle platformer that won "Best Aesthetic" award in CMPM 125 at UCSC, featuring unique battery-powered mechanics.',
                caption: 'Main menu and title screen showcasing the game\'s visual design'
            },
            {
                id: 'gameplay',
                type: 'youtube',
                media: 'https://youtu.be/FO9jCgLUj_4',
                videoId: 'FO9jCgLUj_4',
                thumbnail: './assets/projects/automanora/Automanora.png',
                title: 'Gameplay Demo',
                description: 'Complete gameplay demonstration showcasing level design, puzzle mechanics, and the award-winning aesthetic that earned recognition in CMPM 125.',
                caption: 'Gameplay trailer featuring level progression and core mechanics'
            },
            {
                id: 'inventory',
                type: 'code',
                media: './assets/projects/automanora/automanora-inventory-code.jpeg',
                title: 'Inventory System',
                description: 'Implemented flexible inventory and battery management systems supporting dynamic gameplay mechanics.',
                caption: 'C# code showing inventory management and battery system implementation'
            }
        ],
        externalLinks: {
            demo: 'https://tankprogramming.itch.io/automanora'
        }
    },
    zdoc: {
        projectId: 'zdoc',
        title: 'ZDOC',
        subtitle: 'Cooperative Zombie Survival Game',
        overview: 'A cooperative zombie survival game featuring AI-driven gameplay, dynamic difficulty, and strategic team mechanics.',
        techStack: ['Unity', 'C#', 'AI Systems', 'Cooperative Gameplay'],
        slides: [
            {
                id: 'overview',
                type: 'image',
                media: './assets/projects/zdoc/zdoc.png',
                title: 'Game Overview',
                description: 'ZDOC is a cooperative zombie survival game where players must work together to survive waves of AI-controlled enemies.',
                caption: 'Main gameplay screenshot showing cooperative zombie combat'
            },
            {
                id: 'ai',
                type: 'code',
                media: './assets/projects/zdoc/zdoc-ai-code.png',
                title: 'AI Systems',
                description: 'Developed sophisticated AI systems for zombie behavior, including pathfinding, group coordination, and dynamic spawning.',
                caption: 'AI behavior code showing zombie coordination and pathfinding logic'
            },
            {
                id: 'powerups',
                type: 'image',
                media: './assets/projects/zdoc/zdoc-powerups.png',
                title: 'Power-up Systems',
                description: 'Implemented strategic power-up mechanics that encourage teamwork and tactical decision-making.',
                caption: 'Power-up system showcasing various team-based abilities'
            },
            {
                id: 'development',
                type: 'image',
                media: './assets/projects/zdoc/zdoc-development-timeline.png',
                title: 'Development Timeline',
                description: 'Managed development process from concept to completion, coordinating team efforts and milestone delivery.',
                caption: 'Project timeline showing development phases and team coordination'
            },
            {
                id: 'feedback',
                type: 'image',
                media: './assets/projects/zdoc/zdoc-feedback.png',
                title: 'Player Feedback',
                description: 'Incorporated extensive player feedback to refine gameplay mechanics and improve user experience.',
                caption: 'Player feedback analysis and gameplay iteration results'
            }
        ],
        externalLinks: {
            demo: 'https://echolanegames.itch.io/zdoc'
        }
    },
    gmcc: {
        projectId: 'gmcc',
        title: 'AI Business Assistant',
        subtitle: 'Freelance Software Developer at General Mortgage Capital Corporation',
        overview: 'Built a production-ready backend AI business assistant using Node.js, Express, and Google Gemini, architecting a custom Retrieval-Augmented Generation (RAG) pipeline.',
        techStack: ['Node.js', 'Express', 'Google Gemini', 'PostgreSQL', 'Puppeteer', 'LlamaParse', 'Backblaze B2'],
        slides: [
            {
                id: 'conversation',
                type: 'image',
                media: './assets/projects/GMCC/exampleConversation.png',
                title: 'AI Chatbot Interface',
                description: 'Interactive chatbot interface showcasing natural language processing capabilities and document-driven query handling.',
                caption: 'Example conversation demonstrating AI assistant capabilities'
            },
            {
                id: 'admin',
                type: 'image',
                media: './assets/projects/GMCC/AdminPanel.png',
                title: 'Admin Control Panel',
                description: 'Comprehensive admin panel with role-based access controls, session tracking, and system management tools.',
                caption: 'Administrative dashboard for system management and monitoring'
            },
            {
                id: 'documents',
                type: 'image',
                media: './assets/projects/GMCC/DocumentManagerAdmin.png',
                title: 'Document Management System',
                description: 'Intelligent document ingestion with multimodal support (PDF, DOCX, PPTX) supporting scalable information retrieval across 40+ internal documents.',
                caption: 'Document manager showing multimodal file processing capabilities'
            },
            {
                id: 'training',
                type: 'image',
                media: './assets/projects/GMCC/TrainingModule.png',
                title: 'Training & QA Module',
                description: 'Feedback-driven QA workflows incorporating duplicate detection, expert ratings, and deterministic test questions to continuously drive accuracy.',
                caption: 'Training module interface for quality assurance and feedback management'
            },
            {
                id: 'webscraping',
                type: 'image',
                media: './assets/projects/GMCC/WebScraping.png',
                title: 'Web Scraping & Data Ingestion',
                description: 'Dynamic web scraping via Puppeteer and LlamaParse, supporting advanced vector-embedding database structures for enhanced information retrieval.',
                caption: 'Web scraping tools for automated data collection and processing'
            },
            {
                id: 'login',
                type: 'image',
                media: './assets/projects/GMCC/loginPage.png',
                title: 'Secure Authentication',
                description: 'Integrated secure session tracking and role-based authentication system with PostgreSQL backend and cloud storage integration.',
                caption: 'Login interface'
            }
        ],
        externalLinks: {}
    },
    shinobi: {
        projectId: 'shinobi',
        title: 'Shinobi Survivors',
        subtitle: 'JavaScript, Phaser.js • Solo Developer',
        overview: 'A 2D survival game featuring state machine AI, wave-based combat, and progressive ability unlocks. Built with clean OOP architecture and real-time physics.',
        techStack: ['JavaScript', 'Phaser.js', 'State Machines', 'OOP', 'Game Design'],
        slides: [
            {
                id: 'overview',
                type: 'image',
                media: './assets/projects/shinobi/shinobiGameplay.png',
                title: 'Game Overview',
                description: 'A pixel-art roguelike featuring state machine AI, wave-based combat, and progressive ability unlocks. Navigate through a dungeon, collect power-ups, and defeat the Assassin Boss.',
                caption: 'Shinobi Survivors - 2D action roguelike built with Phaser.js'
            },
            {
                id: 'architecture',
                type: 'code-inline',
                title: 'State Machine Architecture',
                description: 'Implemented finite state machine pattern for clean state transitions. Each entity uses polymorphic state classes, ensuring maintainable and extensible code.',
                codeContent: `// State Machine Implementation
class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        // Initialize state machine managing player
        this.stateMachine = new StateMachine('idle', {
            idle: new IdleState(),
            move: new MoveState(),
            swing: new SwingState(),
            dash: new DashState(),
            shoot: new ShootState(),
            revive: new ReviveState()
        }, [scene, this]);
    }

    update(time, delta) {
        this.stateMachine.step(); // Process current state
        this.updateHealthBar();
    }
}

// Polymorphic State Classes
class IdleState extends State {
    execute(scene, player) {
        const { space, shift, c } = scene.keys;
        
        if (Phaser.Input.Keyboard.JustDown(space)) {
            this.stateMachine.transition('swing');
        }
        if (player.canDash && Phaser.Input.Keyboard.JustDown(shift)) {
            this.stateMachine.transition('dash');
        }
        if (player.canUseShuriken && Phaser.Input.Keyboard.JustDown(c)) {
            this.stateMachine.transition('shoot');
        }
    }
}`,
                codeLanguage: 'javascript',
                caption: 'Clean state management with modular architecture'
            },
            {
                id: 'enemy-ai',
                type: 'code-inline',
                title: 'Intelligent Enemy AI',
                description: 'Each enemy type features unique AI patterns: Bats maintain distance and fire projectiles, Ghosts apply speed debuffs, Spiders use charge mechanics with pathfinding.',
                codeContent: `// Bat Enemy - Ranged Combat AI
class Bat extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'bat');
        this.hp = 10;
        this.attackRange = 250;
        this.attackCooldown = 3500;
        this.projectileSpeed = 200;
        
        // State machine for AI behavior
        this.stateMachine = new StateMachine('idle', {
            idle: new BatIdleState(),
            chase: new BatChaseState(),
            attack: new BatAttackState(),
        }, [scene, this]);
    }

    shootProjectile() {
        const player = this.scene.player;
        if (!player || !this.canShoot) return;

        this.canShoot = false;
        const projectile = this.scene.physics.add.sprite(
            this.x, this.y, 'batAttack1'
        );
        
        // Physics-based targeting
        this.scene.physics.moveToObject(
            projectile, player, this.projectileSpeed
        );
        
        // Collision detection with player
        this.scene.physics.add.collider(player, projectile, 
            (player, projectile) => {
                player.takeDamage(10);
                projectile.destroy();
            }
        );
    }
}

// Spider Enemy - Aggressive Charging
class SpiderChargeState extends State {
    enter(scene, spider) {
        const player = scene.player;
        spider.isCharging = true;
        // Fast charge at 250 speed
        scene.physics.moveToObject(spider, player, spider.chargeSpeed);
    }

    execute(scene, spider) {
        const distance = Phaser.Math.Distance.Between(
            spider.x, spider.y, 
            scene.player.x, scene.player.y
        );

        if (distance < 5) {
            scene.player.takeDamage(10);
            this.stateMachine.transition('return');
        }
    }
}`,
                codeLanguage: 'javascript',
                caption: 'Dynamic AI behaviors with pathfinding and cooldown management'
            },
            {
                id: 'combat',
                type: 'code-inline',
                title: 'Combat System & Projectile Physics',
                description: 'Physics-based combat with upgradeable projectiles featuring piercing mechanics, precise hitbox collision detection, and dynamic damage calculation.',
                codeContent: `// Shuriken Projectile System
class Shuriken extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, damage, piercing, velocity) {
        super(scene, x, y, texture);
        
        this.damage = damage;      // Base damage
        this.piercing = piercing;  // Can hit multiple enemies
        this.setVelocity(velocity.x, velocity.y);
        
        // Collision with all enemy types
        scene.physics.add.collider(this, scene.bats, 
            this.handleCollision, null, this);
        scene.physics.add.collider(this, scene.ghosts, 
            this.handleCollision, null, this);
        scene.physics.add.collider(this, scene.spiders, 
            this.handleCollision, null, this);
        scene.physics.add.collider(this, scene.assassinBoss, 
            this.handleCollision, null, this);
    }

    handleCollision(shuriken, enemy) {
        enemy.takeDamage(this.damage);
        shuriken.piercing--;
        
        if (shuriken.piercing <= 0) {
            shuriken.destroy();
        } else {
            // Maintain velocity after piercing
            const direction = new Phaser.Math.Vector2(
                shuriken.body.velocity.x, 
                shuriken.body.velocity.y
            ).normalize();
            shuriken.setVelocity(direction.x * 300, direction.y * 300);
        }
    }
}

// Player Shooting System
shootShuriken() {
    const shurikenType = this.hasUpgradedShuriken ? 
        'shurikenUpgraded' : 'shurikenBasic';
    const damage = this.hasUpgradedShuriken ? 15 : 5;
    const piercing = this.hasUpgradedShuriken ? 2 : 1; // Piercing mechanic
    
    // Mouse or keyboard direction
    let velocity = this.usingMouse ? 
        this.getMouseDirection() : 
        this.getKeyboardDirection();
    
    velocity.normalize().scale(300);
    
    new Shuriken(this.scene, this.x, this.y, 
        shurikenType, damage, piercing, velocity, this.direction);
}`,
                codeLanguage: 'javascript',
                caption: 'Real-time combat with upgradeable abilities and piercing mechanics'
            },
            {
                id: 'boss',
                type: 'code-inline',
                title: 'Boss Battle Mechanics',
                description: 'Climactic boss battle featuring stun mechanics with cooldowns, telegraphed attacks, state-based AI, and visual feedback systems.',
                codeContent: `// Assassin Boss - Multi-Phase Combat
class AssassinBoss extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        this.hp = 450;
        this.attackPower = 60;
        this.stunDuration = 1500;
        this.stunCooldown = 15000;  // 15 second cooldown
        this.canBeStunned = true;
        this.setTint(0x00ff00);     // Green tint when vulnerable
        
        // Boss state machine
        this.stateMachine = new StateMachine('idle', {
            idle: new BossIdleState(),
            chase: new BossChaseState(),
            attack: new BossAttackState(),
            stun: new BossStunState(),
            death: new BossDeathState(),
        }, [scene, this]);
    }

    takeDamage(amount) {
        if (!this.isHurt) {
            this.hp -= amount;
            this.scene.sound.play("bossHit");
            this.isHurt = true;
            this.setTint(0xff0000); // Flash red on hit
            
            // Check for stun window
            if (!this.isStunned && this.canBeStunned) {
                this.stateMachine.transition('stun');
                this.scene.sound.play("bossStun");
                this.canBeStunned = false;
                
                // Cooldown before next stun
                this.scene.time.delayedCall(this.stunCooldown, () => {
                    this.canBeStunned = true;
                    this.setTint(0x00ff00); // Green = vulnerable
                });
            }
            
            if (this.hp <= 0) {
                this.stateMachine.transition('death');
            }
        }
    }
}

// Boss Stun State
class BossStunState extends State {
    enter(scene, boss) {
        boss.setVelocity(0);
        boss.isStunned = true;
        boss.setTint(0xaaaaaa);  // Gray tint during stun
        boss.anims.play('assassinStun');

        scene.time.delayedCall(boss.stunDuration, () => {
            boss.clearTint();
            boss.isStunned = false;
            this.stateMachine.transition('chase');
        });
    }
}`,
                codeLanguage: 'javascript',
                caption: 'Advanced boss mechanics with timing windows and visual feedback'
            }
        ],
        externalLinks: {
            demo: 'https://naitikp04.github.io/FinalGame/',
            github: 'https://github.com/NaitikP04/FinalGame'
        }
    }
};

// Data validation and error handling
function validateProjectData(projectData) {
    const errors = [];

    if (!projectData.projectId) {
        errors.push('Missing projectId');
    }

    if (!projectData.title) {
        errors.push('Missing title');
    }

    if (!projectData.slides || !Array.isArray(projectData.slides)) {
        errors.push('Missing or invalid slides array');
    } else {
        projectData.slides.forEach((slide, index) => {
            if (!slide.id) {
                errors.push(`Slide ${index}: Missing id`);
            }
            if (!['image', 'video', 'youtube', 'code', 'code-inline', 'construction'].includes(slide.type)) {
                errors.push(`Slide ${index}: Invalid type (must be image, video, youtube, code, code-inline, or construction)`);
            }
            // Media is not required for construction or code-inline slides
            if (!slide.media && slide.type !== 'construction' && slide.type !== 'code-inline') {
                errors.push(`Slide ${index}: Missing media path`);
            }
            if (!slide.title) {
                errors.push(`Slide ${index}: Missing title`);
            }
            if (!slide.description) {
                errors.push(`Slide ${index}: Missing description`);
            }
        });
    }

    return errors;
}

function getProjectData(projectId) {
    const projectData = projectsData[projectId];

    if (!projectData) {
        console.error(`Project data not found for: ${projectId}`);
        return null;
    }

    const validationErrors = validateProjectData(projectData);
    if (validationErrors.length > 0) {
        console.error(`Validation errors for project ${projectId}:`, validationErrors);
        return null;
    }

    return projectData;
}

function handleMissingContent(projectId, slideId, contentType) {
    console.warn(`Missing ${contentType} for project ${projectId}, slide ${slideId}`);

    // Return fallback content based on type
    switch (contentType) {
        case 'image':
            return {
                src: `data:image/svg+xml;base64,${btoa(`
                    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#f0f0f0"/>
                        <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#666" text-anchor="middle" dy=".3em">
                            Image not available
                        </text>
                    </svg>
                `)}`,
                alt: 'Image not available'
            };
        case 'video':
            return {
                src: null,
                poster: `data:image/svg+xml;base64,${btoa(`
                    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#f0f0f0"/>
                        <circle cx="200" cy="150" r="40" fill="#666"/>
                        <polygon points="185,135 185,165 215,150" fill="white"/>
                        <text x="50%" y="80%" font-family="Arial" font-size="14" fill="#666" text-anchor="middle">
                            Video not available
                        </text>
                    </svg>
                `)}`
            };
        case 'code':
            return {
                src: `data:image/svg+xml;base64,${btoa(`
                    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#f8f8f8"/>
                        <text x="50%" y="50%" font-family="monospace" font-size="14" fill="#666" text-anchor="middle" dy=".3em">
                            Code screenshot not available
                        </text>
                    </svg>
                `)}`,
                alt: 'Code screenshot not available'
            };
        default:
            return null;
    }
}

// Enhanced Modal functionality
const modals = document.querySelectorAll('.modal, .enhanced-modal');
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
const closeBtns = document.querySelectorAll('.close');

// Current slide tracking for each modal
const modalSlideStates = {};

learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const project = this.getAttribute('data-project');
        const modal = document.getElementById(project + 'Modal');

        if (modal) {
            // Check if project data exists
            const projectData = getProjectData(project);
            if (!projectData) {
                alert(`Project data not configured for ${project}. Please check the project configuration.`);
                return;
            }

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';

            // Initialize slideshow if it's an enhanced modal
            if (modal.classList.contains('enhanced-modal')) {
                initializeSlideshow(modal, project);
            }
        } else {
            alert('Modal for ' + project + ' not implemented yet. You can add it following the tacitModal example.');
        }
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const modal = this.closest('.modal, .enhanced-modal');
        closeModal(modal);
    });
});

window.addEventListener('click', function (event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

// Dynamic slideshow initialization system
function initializeSlideshow(modal, projectId) {
    const projectData = getProjectData(projectId);

    if (!projectData) {
        console.error(`Cannot initialize slideshow: Project data not found for ${projectId}`);
        showErrorState(modal, `Project data not found for ${projectId}`);
        return;
    }

    // Generate slides dynamically based on project data
    const success = generateSlidesFromData(modal, projectData);
    if (!success) {
        console.error(`Failed to generate slides for project ${projectId}`);
        showErrorState(modal, `Failed to load project content for ${projectId}`);
        return;
    }

    // FORCE CLEANUP: Remove any lingering loading spinners immediately
    setTimeout(() => {
        const allSpinners = modal.querySelectorAll('.image-loading');
        if (allSpinners.length > 0) {
            console.log(`Removing ${allSpinners.length} lingering spinners from modal`);
            allSpinners.forEach(spinner => spinner.remove());
        }

        // Also remove loading class from all images
        const allImages = modal.querySelectorAll('.media-image');
        allImages.forEach(img => img.classList.remove('loading'));
    }, 100);

    // Get generated slides and indicators
    const slides = modal.querySelectorAll('.slide-content');
    const indicators = modal.querySelectorAll('.indicator');
    const prevBtn = modal.querySelector('.nav-arrow-left');
    const nextBtn = modal.querySelector('.nav-arrow-right');

    // Initialize slide state
    modalSlideStates[projectId] = {
        currentSlide: 0,
        totalSlides: slides.length,
        projectData: projectData
    };

    // Handle projects with different numbers of slides
    if (slides.length === 0) {
        showErrorState(modal, 'No slides available for this project');
        return;
    }

    if (slides.length === 1) {
        // Hide navigation for single slide
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        const indicatorContainer = modal.querySelector('.slide-indicators');
        if (indicatorContainer) indicatorContainer.style.display = 'none';
    } else {
        // Show navigation for multiple slides
        if (prevBtn) prevBtn.style.display = 'block';
        if (nextBtn) nextBtn.style.display = 'block';
        const indicatorContainer = modal.querySelector('.slide-indicators');
        if (indicatorContainer) indicatorContainer.style.display = 'flex';
    }

    // Initialize media handling for generated content
    initializeImageHandling(modal);
    initializeVideoHandling(modal);
    initializeCodeHandling(modal);

    // Show first slide
    showSlide(modal, projectId, 0);

    // Navigation arrow event listeners
    if (prevBtn && slides.length > 1) {
        // Remove existing listeners to prevent duplicates
        const newPrevBtn = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);

        newPrevBtn.addEventListener('click', () => {
            navigateSlide(modal, projectId, -1);
        });
    }

    if (nextBtn && slides.length > 1) {
        // Remove existing listeners to prevent duplicates
        const newNextBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);

        newNextBtn.addEventListener('click', () => {
            navigateSlide(modal, projectId, 1);
        });
    }

    // Indicator event listeners
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            if (index !== modalSlideStates[projectId].currentSlide) {
                // Add smooth transition for indicator navigation
                const currentSlideElement = modal.querySelector('.slide-content.active');
                if (currentSlideElement) {
                    currentSlideElement.style.opacity = '0';
                    setTimeout(() => {
                        showSlide(modal, projectId, index);
                        const newSlideElement = modal.querySelector('.slide-content.active');
                        if (newSlideElement) {
                            newSlideElement.style.opacity = '0';
                            setTimeout(() => {
                                newSlideElement.style.opacity = '1';
                            }, 50);
                        }
                    }, 150);
                } else {
                    showSlide(modal, projectId, index);
                }
            }
        });

        // Add keyboard support for indicators
        indicator.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                indicator.click();
            }
        });
    });

    // Keyboard navigation with focus management
    const keyHandler = (e) => {
        if (modal.style.display === 'block') {
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    navigateSlide(modal, projectId, -1);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    navigateSlide(modal, projectId, 1);
                    break;
                case 'Home':
                    e.preventDefault();
                    showSlide(modal, projectId, 0);
                    break;
                case 'End':
                    e.preventDefault();
                    showSlide(modal, projectId, modalSlideStates[projectId].totalSlides - 1);
                    break;
                case 'Escape':
                    e.preventDefault();
                    closeModal(modal);
                    document.removeEventListener('keydown', keyHandler);
                    break;
            }
        }
    };

    // Store the key handler for cleanup
    modal.keyHandler = keyHandler;
    document.addEventListener('keydown', keyHandler);

    // Focus management - focus the modal when opened
    modal.setAttribute('tabindex', '-1');
    modal.focus();

    // Trap focus within modal
    trapFocus(modal);
}

// Generate slides dynamically from project data
function generateSlidesFromData(modal, projectData) {
    try {
        const slideshowContainer = modal.querySelector('.slide-content-wrapper');
        if (!slideshowContainer) {
            console.error('Slide content wrapper not found in modal');
            return false;
        }

        // Clear existing slides and any loading elements
        const existingSlides = slideshowContainer.querySelectorAll('.slide-content');
        console.log('Clearing existing slides:', existingSlides.length); // Debug log
        existingSlides.forEach(slide => slide.remove());

        // Also clear any orphaned loading spinners
        const orphanedSpinners = slideshowContainer.querySelectorAll('.image-loading');
        orphanedSpinners.forEach(spinner => spinner.remove());

        // Clear existing indicators
        const indicatorContainer = modal.querySelector('.slide-indicators');
        if (indicatorContainer) {
            indicatorContainer.innerHTML = '';
        }

        // Generate slides from project data
        projectData.slides.forEach((slideData, index) => {
            const slideElement = createSlideElement(slideData, index);

            // Mark first slide as active
            if (index === 0) {
                slideElement.classList.add('active');
            }

            slideshowContainer.appendChild(slideElement);

            // Create indicator
            if (indicatorContainer) {
                const indicator = createIndicatorElement(index, projectData.slides.length);
                indicatorContainer.appendChild(indicator);
            }
        });

        return true;
    } catch (error) {
        console.error('Error generating slides from data:', error);
        return false;
    }
}

// Create individual slide element
function createSlideElement(slideData, index) {
    const slide = document.createElement('div');
    slide.className = 'slide-content';
    slide.dataset.slideId = slideData.id;

    // Create slide media container
    const mediaContainer = document.createElement('div');
    mediaContainer.className = 'slide-media';

    // Create media element based on type
    let mediaElement;
    switch (slideData.type) {
        case 'image':
            mediaElement = createImageElement(
                slideData.media,
                slideData.caption || slideData.title,
                'auto'
            );
            break;
        case 'video':
            mediaElement = createVideoElement(
                slideData.media,
                slideData.thumbnail,
                'auto'
            );
            break;
        case 'youtube':
            mediaElement = createYouTubeElement(
                slideData.videoId,
                slideData.thumbnail,
                'auto'
            );
            break;
        case 'code':
            mediaElement = createCodeElement(
                slideData.media,
                'code',
                slideData.caption || slideData.title
            );
            break;
        case 'code-inline':
            mediaElement = createInlineCodeElement(
                slideData.codeContent,
                slideData.codeLanguage || 'javascript',
                slideData.title
            );
            break;
        case 'construction':
            mediaElement = createConstructionElement();
            break;
        default:
            console.warn(`Unknown slide type: ${slideData.type}`);
            mediaElement = createImageElement(
                handleMissingContent('unknown', slideData.id, 'image').src,
                'Content not available'
            );
    }

    mediaContainer.appendChild(mediaElement);

    // Create slide text container
    const textContainer = document.createElement('div');
    textContainer.className = 'slide-text';

    const title = document.createElement('h3');
    title.className = 'slide-title';
    title.textContent = slideData.title;

    const description = document.createElement('p');
    description.className = 'slide-description';
    description.textContent = slideData.description;

    textContainer.appendChild(title);
    textContainer.appendChild(description);

    // Add caption if available
    if (slideData.caption) {
        const caption = document.createElement('p');
        caption.className = 'slide-caption';
        caption.textContent = slideData.caption;
        textContainer.appendChild(caption);
    }

    slide.appendChild(mediaContainer);
    slide.appendChild(textContainer);

    return slide;
}

// Create indicator element
function createIndicatorElement(index, totalSlides) {
    const indicator = document.createElement('button');
    indicator.className = index === 0 ? 'indicator active' : 'indicator';
    indicator.setAttribute('aria-label', `Go to slide ${index + 1} of ${totalSlides}`);
    indicator.setAttribute('tabindex', '0');
    indicator.dataset.slideIndex = index;

    return indicator;
}

// Show error state in modal
function showErrorState(modal, message) {
    const slideshowContainer = modal.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.innerHTML = `
            <div class="slide-content active error-state">
                <div class="slide-media">
                    <div class="error-content">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h3>Unable to Load Content</h3>
                        <p>${message}</p>
                        <button onclick="location.reload()" class="btn btn-secondary">Refresh Page</button>
                    </div>
                </div>
            </div>
        `;
    }

    // Hide navigation controls
    const prevBtn = modal.querySelector('.nav-arrow-left');
    const nextBtn = modal.querySelector('.nav-arrow-right');
    const indicators = modal.querySelector('.slide-indicators');

    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (indicators) indicators.style.display = 'none';
}

function navigateSlide(modal, projectId, direction) {
    const state = modalSlideStates[projectId];
    const newSlide = state.currentSlide + direction;

    if (newSlide >= 0 && newSlide < state.totalSlides) {
        const slides = modal.querySelectorAll('.slide-content');
        const currentSlide = slides[state.currentSlide];
        const nextSlide = slides[newSlide];

        if (currentSlide && nextSlide) {
            // Set up transition classes
            if (direction > 0) {
                // Moving forward
                nextSlide.classList.remove('prev');
                nextSlide.classList.add('next');
                currentSlide.classList.add('prev');
            } else {
                // Moving backward
                nextSlide.classList.remove('next');
                nextSlide.classList.add('prev');
                currentSlide.classList.add('next');
            }

            // Trigger transition
            setTimeout(() => {
                showSlide(modal, projectId, newSlide);
            }, 50);
        } else {
            showSlide(modal, projectId, newSlide);
        }
    }
}

function showSlide(modal, projectId, slideIndex) {
    const slides = modal.querySelectorAll('.slide-content');
    const indicators = modal.querySelectorAll('.indicator');
    const prevBtn = modal.querySelector('.nav-arrow-left');
    const nextBtn = modal.querySelector('.nav-arrow-right');
    const state = modalSlideStates[projectId];

    // Validate slide index
    if (slideIndex < 0 || slideIndex >= state.totalSlides) {
        return;
    }

    // Pause all videos in non-active slides
    slides.forEach((slide, index) => {
        const video = slide.querySelector('.media-video');
        if (video && index !== slideIndex) {
            video.pause();
        }
    });

    // Remove all active classes and transition classes
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev', 'next');
        if (index === slideIndex) {
            slide.classList.add('active');
        } else if (index < slideIndex) {
            slide.classList.add('prev');
        } else {
            slide.classList.add('next');
        }
    });

    // Update indicators
    indicators.forEach(indicator => indicator.classList.remove('active'));
    if (indicators[slideIndex]) {
        indicators[slideIndex].classList.add('active');
        // Update aria-label for accessibility
        indicators[slideIndex].setAttribute('aria-label', `Current slide ${slideIndex + 1} of ${state.totalSlides}`);
    }

    // Update other indicators' aria-labels
    indicators.forEach((indicator, index) => {
        if (index !== slideIndex) {
            indicator.setAttribute('aria-label', `Go to slide ${index + 1} of ${state.totalSlides}`);
        }
    });

    // Update state
    state.currentSlide = slideIndex;

    // Update navigation buttons
    if (prevBtn) {
        prevBtn.disabled = slideIndex === 0;
        prevBtn.setAttribute('aria-label', slideIndex === 0 ? 'Previous slide (disabled)' : 'Previous slide');
    }
    if (nextBtn) {
        nextBtn.disabled = slideIndex === state.totalSlides - 1;
        nextBtn.setAttribute('aria-label', slideIndex === state.totalSlides - 1 ? 'Next slide (disabled)' : 'Next slide');
    }
}

// Project filtering
function showAllProjects(event) {
    const projects = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    projects.forEach(project => {
        project.style.display = 'block';
    });

    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

function filterProjects(category, event) {
    const projects = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    projects.forEach(project => {
        if (project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });

    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Image handling functions
function createImageElement(src, alt, aspectRatio = 'auto') {
    const container = document.createElement('div');
    container.className = `image-container aspect-${aspectRatio}`;

    const loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'image-loading';
    container.appendChild(loadingSpinner);

    const img = document.createElement('img');
    img.className = 'media-image loading';
    img.alt = alt || 'Project image';

    // Function to clean up loading state
    const cleanupLoading = () => {
        img.classList.remove('loading');
        // Remove all loading spinners in this container (in case of duplicates)
        const spinners = container.querySelectorAll('.image-loading');
        spinners.forEach(spinner => {
            if (spinner.parentNode) {
                spinner.parentNode.removeChild(spinner);
            }
        });
    };

    // Handle image loading
    img.onload = function () {
        console.log('Image loaded:', src); // Debug log
        cleanupLoading();

        // Determine best aspect ratio if auto
        if (aspectRatio === 'auto') {
            const ratio = img.naturalWidth / img.naturalHeight;
            if (ratio > 1.5) {
                container.classList.add('aspect-16-9');
            } else if (ratio > 1.2) {
                container.classList.add('aspect-4-3');
            } else {
                container.classList.add('aspect-1-1');
            }
        }
    };

    // Handle image error
    img.onerror = function () {
        console.log('Image failed to load:', src); // Debug log
        img.classList.add('error');
        cleanupLoading();

        const errorDiv = document.createElement('div');
        errorDiv.className = 'image-error';
        errorDiv.innerHTML = `
            <i class="fas fa-image"></i>
            <p>Image failed to load</p>
        `;
        container.appendChild(errorDiv);
    };

    // Set src and check if image is already loaded (cached)
    img.src = src;

    // Handle case where image is already cached and loaded
    if (img.complete && img.naturalWidth > 0) {
        // Use setTimeout to ensure the spinner exists before removing it
        setTimeout(() => {
            cleanupLoading();
        }, 0);
    }

    // AGGRESSIVE FALLBACK: Remove loading spinner after 1 seconds no matter what
    setTimeout(() => {
        if (container.querySelector('.image-loading')) {
            console.warn('Force removing stuck loading spinner for:', src);
            cleanupLoading();
        }
    }, 1000);

    container.appendChild(img);

    return container;
}

function handleImageResize() {
    const images = document.querySelectorAll('.media-image');
    images.forEach(img => {
        const container = img.closest('.slide-media');
        if (container && img.complete) {
            // Adjust image size based on container
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;
            const imgRatio = img.naturalWidth / img.naturalHeight;
            const containerRatio = containerWidth / containerHeight;

            if (imgRatio > containerRatio) {
                // Image is wider than container
                img.style.width = '100%';
                img.style.height = 'auto';
            } else {
                // Image is taller than container
                img.style.width = 'auto';
                img.style.height = '100%';
            }
        }
    });
}

// Initialize image handling for existing images
function initializeImageHandling(modal) {
    const images = modal.querySelectorAll('.media-image');
    images.forEach(img => {
        const container = img.closest('.slide-media');

        // Remove any loading states immediately for already-loaded images
        if (img.complete && img.naturalWidth > 0) {
            if (container) {
                container.classList.remove('loading');
            }
            img.classList.remove('loading');
            // Remove any orphaned loading spinners
            const spinners = container?.querySelectorAll('.image-loading');
            spinners?.forEach(spinner => spinner.remove());
            return;
        }

        // Only set up loading logic for images that aren't loaded yet
        if (!img.complete && container) {
            container.classList.add('loading');

            img.onload = function () {
                container.classList.remove('loading');
                img.classList.remove('loading');
                handleImageResize();
            };

            img.onerror = function () {
                container.classList.remove('loading');
                container.classList.add('error');
                container.innerHTML = `
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Failed to load image</p>
                `;
            };
        }
    });
}

// Helper function to close modal with proper cleanup
function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';

    // Remove event listeners
    if (modal.keyHandler) {
        document.removeEventListener('keydown', modal.keyHandler);
        modal.keyHandler = null;
    }

    // Return focus to the trigger button
    const projectId = modal.id.replace('Modal', '');
    const triggerBtn = document.querySelector(`[data-project="${projectId}"]`);
    if (triggerBtn) {
        triggerBtn.focus();
    }
}

// Focus trap functionality for accessibility
function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
}

// Scroll effect for navbar
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Video handling functions
function createVideoElement(src, poster, aspectRatio = '16-9') {
    const container = document.createElement('div');
    container.className = `video-container aspect-${aspectRatio}`;

    // Loading state
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'video-loading';
    loadingDiv.innerHTML = `
        <div class="spinner"></div>
        <p>Loading video...</p>
    `;
    container.appendChild(loadingDiv);

    const video = document.createElement('video');
    video.className = 'media-video';
    video.controls = true;
    video.preload = 'metadata';
    if (poster) video.poster = poster;

    // Handle video loading
    video.onloadedmetadata = function () {
        loadingDiv.remove();

        // Determine aspect ratio if auto
        if (aspectRatio === 'auto') {
            const ratio = video.videoWidth / video.videoHeight;
            container.classList.remove('aspect-16-9', 'aspect-4-3');
            if (ratio > 1.5) {
                container.classList.add('aspect-16-9');
            } else {
                container.classList.add('aspect-4-3');
            }
        }

        // Add mobile-friendly controls
        if (window.innerWidth <= 768) {
            addMobileVideoControls(container, video);
        }
    };

    // Handle video error
    video.onerror = function () {
        loadingDiv.remove();

        const errorDiv = document.createElement('div');
        errorDiv.className = 'video-error';
        errorDiv.innerHTML = `
            <i class="fas fa-play-circle"></i>
            <p>Video failed to load</p>
            <button onclick="retryVideoLoad(this)">Retry</button>
        `;
        container.appendChild(errorDiv);

        // Store original src for retry
        errorDiv.dataset.videoSrc = src;
        if (poster) errorDiv.dataset.videoPoster = poster;
    };

    video.src = src;
    container.appendChild(video);

    return container;
}

function addMobileVideoControls(container, video) {
    const controls = document.createElement('div');
    controls.className = 'video-controls';

    const playBtn = document.createElement('button');
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    playBtn.onclick = () => toggleVideoPlayback(video, playBtn);

    const progress = document.createElement('div');
    progress.className = 'video-progress';
    const progressBar = document.createElement('div');
    progressBar.className = 'video-progress-bar';
    progress.appendChild(progressBar);

    const timeDisplay = document.createElement('div');
    timeDisplay.className = 'video-time';
    timeDisplay.textContent = '0:00 / 0:00';

    controls.appendChild(playBtn);
    controls.appendChild(progress);
    controls.appendChild(timeDisplay);
    container.appendChild(controls);

    // Update progress and time
    video.ontimeupdate = () => updateVideoProgress(video, progressBar, timeDisplay);
    video.onended = () => {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        container.classList.remove('show-controls');
    };

    // Progress bar click
    progress.onclick = (e) => seekVideo(e, video, progress);

    // Show controls on touch
    container.ontouchstart = () => {
        container.classList.add('show-controls');
        setTimeout(() => container.classList.remove('show-controls'), 3000);
    };
}

function toggleVideoPlayback(video, button) {
    if (video.paused) {
        video.play();
        button.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        video.pause();
        button.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function updateVideoProgress(video, progressBar, timeDisplay) {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.style.width = progress + '%';

    const currentTime = formatTime(video.currentTime);
    const duration = formatTime(video.duration);
    timeDisplay.textContent = `${currentTime} / ${duration}`;
}

function seekVideo(e, video, progressContainer) {
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    video.currentTime = percentage * video.duration;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function retryVideoLoad(button) {
    const errorDiv = button.closest('.video-error');
    const container = errorDiv.closest('.video-container');
    const src = errorDiv.dataset.videoSrc;
    const poster = errorDiv.dataset.videoPoster;

    errorDiv.remove();

    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'video-loading';
    loadingDiv.innerHTML = `
        <div class="spinner"></div>
        <p>Retrying...</p>
    `;
    container.appendChild(loadingDiv);

    const video = container.querySelector('video');
    if (video) {
        video.src = src;
        video.load();
    }
}

// YouTube video handling function
function createYouTubeElement(videoId, thumbnail, aspectRatio = '16-9') {
    const container = document.createElement('div');
    container.className = `video-container aspect-${aspectRatio}`;

    // Create YouTube iframe
    const iframe = document.createElement('iframe');
    iframe.className = 'media-youtube';
    iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';

    container.appendChild(iframe);

    return container;
}

// Initialize video handling for existing videos
function initializeVideoHandling(modal) {
    const videos = modal.querySelectorAll('.media-video');
    videos.forEach(video => {
        const container = video.closest('.slide-media');
        if (container && !video.readyState) {
            container.classList.add('loading');

            video.onloadedmetadata = function () {
                container.classList.remove('loading');

                // Add mobile controls if needed
                if (window.innerWidth <= 768 && !container.querySelector('.video-controls')) {
                    addMobileVideoControls(container, video);
                }
            };

            video.onerror = function () {
                container.classList.remove('loading');
                container.classList.add('error');
                container.innerHTML = `
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Failed to load video</p>
                `;
            };
        }

        // Pause video when slide changes
        video.onslidechange = () => video.pause();
    });
}

// Code screenshot handling functions
function createCodeElement(src, language = 'code', alt = 'Code screenshot') {
    const container = document.createElement('div');
    container.className = 'code-container';

    // Code header
    const header = document.createElement('div');
    header.className = 'code-header';

    const languageSpan = document.createElement('span');
    languageSpan.className = 'code-language';
    languageSpan.textContent = language;

    const actions = document.createElement('div');
    actions.className = 'code-actions';

    const fullscreenBtn = document.createElement('button');
    fullscreenBtn.className = 'code-action-btn';
    fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    fullscreenBtn.title = 'View fullscreen';
    fullscreenBtn.onclick = () => openCodeFullscreen(src, alt);

    actions.appendChild(fullscreenBtn);
    header.appendChild(languageSpan);
    header.appendChild(actions);
    container.appendChild(header);

    // Loading state
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'code-loading';
    loadingDiv.innerHTML = `
        <div class="spinner"></div>
        <p>Loading code...</p>
    `;

    // Code content
    const content = document.createElement('div');
    content.className = 'code-content';
    content.appendChild(loadingDiv);

    const img = document.createElement('img');
    img.className = 'media-code';
    img.alt = alt;

    // Handle image loading
    img.onload = function () {
        loadingDiv.remove();
        content.appendChild(img);

        // Add zoom controls
        addCodeZoomControls(container, img);

        // Add syntax highlighting effect
        container.classList.add('code-highlight');
    };

    // Handle image error
    img.onerror = function () {
        loadingDiv.remove();

        const errorDiv = document.createElement('div');
        errorDiv.className = 'code-error';
        errorDiv.innerHTML = `
            <i class="fas fa-code"></i>
            <p>Failed to load code screenshot</p>
            <button onclick="retryCodeLoad(this)">Retry</button>
        `;
        content.appendChild(errorDiv);

        // Store original src for retry
        errorDiv.dataset.codeSrc = src;
        errorDiv.dataset.codeAlt = alt;
    };

    img.src = src;
    container.appendChild(content);

    return container;
}

function addCodeZoomControls(container, img) {
    const zoomControls = document.createElement('div');
    zoomControls.className = 'code-zoom-controls';

    const zoomInBtn = document.createElement('button');
    zoomInBtn.className = 'zoom-btn';
    zoomInBtn.innerHTML = '<i class="fas fa-plus"></i>';
    zoomInBtn.title = 'Zoom in';
    zoomInBtn.onclick = () => zoomCode(container, img, 1.2);

    const zoomOutBtn = document.createElement('button');
    zoomOutBtn.className = 'zoom-btn';
    zoomOutBtn.innerHTML = '<i class="fas fa-minus"></i>';
    zoomOutBtn.title = 'Zoom out';
    zoomOutBtn.onclick = () => zoomCode(container, img, 0.8);

    const resetBtn = document.createElement('button');
    resetBtn.className = 'zoom-btn';
    resetBtn.innerHTML = '<i class="fas fa-undo"></i>';
    resetBtn.title = 'Reset zoom and position';
    resetBtn.onclick = () => resetCodeZoom(container, img);

    zoomControls.appendChild(zoomInBtn);
    zoomControls.appendChild(zoomOutBtn);
    zoomControls.appendChild(resetBtn);

    container.appendChild(zoomControls);

    // Store zoom level and pan position
    img.dataset.zoomLevel = '1';
    img.dataset.panX = '0';
    img.dataset.panY = '0';

    // Add pan functionality
    enableCodePanning(container, img);
}

function zoomCode(container, img, factor) {
    const currentZoom = parseFloat(img.dataset.zoomLevel || '1');
    const newZoom = Math.max(0.5, Math.min(3, currentZoom * factor));

    const panX = parseFloat(img.dataset.panX || '0');
    const panY = parseFloat(img.dataset.panY || '0');

    img.style.transform = `translate(${panX}px, ${panY}px) scale(${newZoom})`;
    img.style.transformOrigin = 'center';
    img.dataset.zoomLevel = newZoom.toString();

    // Update cursor style
    const content = container.querySelector('.code-content');
    if (newZoom > 1) {
        content.style.cursor = 'grab';
        img.style.cursor = 'grab';
    } else {
        content.style.cursor = 'default';
        img.style.cursor = 'default';
    }

    // Update button states
    const zoomInBtn = container.querySelector('.zoom-btn:first-child');
    const zoomOutBtn = container.querySelector('.zoom-btn:nth-child(2)');

    zoomInBtn.disabled = newZoom >= 3;
    zoomOutBtn.disabled = newZoom <= 0.5;
}

function resetCodeZoom(container, img) {
    img.style.transform = 'translate(0px, 0px) scale(1)';
    img.dataset.zoomLevel = '1';
    img.dataset.panX = '0';
    img.dataset.panY = '0';

    // Reset cursor
    const content = container.querySelector('.code-content');
    content.style.cursor = 'default';
    img.style.cursor = 'default';

    // Reset button states
    const zoomInBtn = container.querySelector('.zoom-btn:first-child');
    const zoomOutBtn = container.querySelector('.zoom-btn:nth-child(2)');

    zoomInBtn.disabled = false;
    zoomOutBtn.disabled = false;
}

// Enable click-and-drag panning for zoomed code images
function enableCodePanning(container, img) {
    const content = container.querySelector('.code-content');
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let currentPanX = 0;
    let currentPanY = 0;

    content.addEventListener('mousedown', (e) => {
        const zoomLevel = parseFloat(img.dataset.zoomLevel || '1');

        // Only enable panning if zoomed in
        if (zoomLevel > 1) {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            currentPanX = parseFloat(img.dataset.panX || '0');
            currentPanY = parseFloat(img.dataset.panY || '0');

            content.style.cursor = 'grabbing';
            img.style.cursor = 'grabbing';
            e.preventDefault(); // Prevent text selection
        }
    });

    content.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        const newPanX = currentPanX + deltaX;
        const newPanY = currentPanY + deltaY;

        img.dataset.panX = newPanX.toString();
        img.dataset.panY = newPanY.toString();

        const zoomLevel = parseFloat(img.dataset.zoomLevel || '1');
        img.style.transform = `translate(${newPanX}px, ${newPanY}px) scale(${zoomLevel})`;
    });

    content.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            const zoomLevel = parseFloat(img.dataset.zoomLevel || '1');
            content.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
            img.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
        }
    });

    content.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            const zoomLevel = parseFloat(img.dataset.zoomLevel || '1');
            content.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
            img.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
        }
    });

    // Touch support for mobile
    content.addEventListener('touchstart', (e) => {
        const zoomLevel = parseFloat(img.dataset.zoomLevel || '1');

        if (zoomLevel > 1 && e.touches.length === 1) {
            isDragging = true;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            currentPanX = parseFloat(img.dataset.panX || '0');
            currentPanY = parseFloat(img.dataset.panY || '0');
            e.preventDefault();
        }
    }, { passive: false });

    content.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;

        const deltaX = e.touches[0].clientX - startX;
        const deltaY = e.touches[0].clientY - startY;

        const newPanX = currentPanX + deltaX;
        const newPanY = currentPanY + deltaY;

        img.dataset.panX = newPanX.toString();
        img.dataset.panY = newPanY.toString();

        const zoomLevel = parseFloat(img.dataset.zoomLevel || '1');
        img.style.transform = `translate(${newPanX}px, ${newPanY}px) scale(${zoomLevel})`;
        e.preventDefault();
    }, { passive: false });

    content.addEventListener('touchend', () => {
        isDragging = false;
    });
}

// Create construction/coming soon element
function createConstructionElement() {
    const container = document.createElement('div');
    container.className = 'construction-container';

    container.innerHTML = `
        <div class="construction-content">
            <div class="construction-icon">
                <i class="fas fa-hard-hat"></i>
                <i class="fas fa-wrench"></i>
            </div>
            <h3 class="construction-title">Under Construction</h3>
            <p class="construction-message">Additional content and screenshots coming soon!</p>
            <div class="construction-animation">
                <div class="construction-bar"></div>
            </div>
        </div>
    `;

    return container;
}

// Create inline code element (for formatted code without images)
function createInlineCodeElement(codeContent, language = 'javascript', title = 'Code') {
    const container = document.createElement('div');
    container.className = 'inline-code-container';

    // Code header
    const header = document.createElement('div');
    header.className = 'code-header';

    const languageSpan = document.createElement('span');
    languageSpan.className = 'code-language';
    languageSpan.textContent = language;

    const actions = document.createElement('div');
    actions.className = 'code-actions';

    const copyBtn = document.createElement('button');
    copyBtn.className = 'code-action-btn';
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    copyBtn.title = 'Copy code';
    copyBtn.onclick = () => {
        navigator.clipboard.writeText(codeContent).then(() => {
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
            }, 2000);
        });
    };

    actions.appendChild(copyBtn);
    header.appendChild(languageSpan);
    header.appendChild(actions);
    container.appendChild(header);

    // Code content with syntax highlighting
    const content = document.createElement('div');
    content.className = 'inline-code-content';

    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.className = `language-${language}`;
    code.textContent = codeContent;

    pre.appendChild(code);
    content.appendChild(pre);
    container.appendChild(content);

    return container;
}

function openCodeFullscreen(src, alt) {
    const fullscreen = document.createElement('div');
    fullscreen.className = 'code-fullscreen';

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'code-fullscreen-close';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.onclick = () => closeCodeFullscreen(fullscreen);

    fullscreen.appendChild(img);
    fullscreen.appendChild(closeBtn);
    document.body.appendChild(fullscreen);

    // Close on click outside or escape key
    fullscreen.onclick = (e) => {
        if (e.target === fullscreen) {
            closeCodeFullscreen(fullscreen);
        }
    };

    const keyHandler = (e) => {
        if (e.key === 'Escape') {
            closeCodeFullscreen(fullscreen);
            document.removeEventListener('keydown', keyHandler);
        }
    };
    document.addEventListener('keydown', keyHandler);

    // Store key handler for cleanup
    fullscreen.keyHandler = keyHandler;
}

function closeCodeFullscreen(fullscreen) {
    if (fullscreen.keyHandler) {
        document.removeEventListener('keydown', fullscreen.keyHandler);
    }
    fullscreen.remove();
}

function retryCodeLoad(button) {
    const errorDiv = button.closest('.code-error');
    const content = errorDiv.closest('.code-content');
    const src = errorDiv.dataset.codeSrc;
    const alt = errorDiv.dataset.codeAlt;

    errorDiv.remove();

    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'code-loading';
    loadingDiv.innerHTML = `
        <div class="spinner"></div>
        <p>Retrying...</p>
    `;
    content.appendChild(loadingDiv);

    const img = document.createElement('img');
    img.className = 'media-code';
    img.alt = alt;
    img.src = src;

    img.onload = function () {
        loadingDiv.remove();
        content.appendChild(img);

        const container = content.closest('.code-container');
        addCodeZoomControls(container, img);
        container.classList.add('code-highlight');
    };

    img.onerror = function () {
        loadingDiv.remove();
        const newErrorDiv = document.createElement('div');
        newErrorDiv.className = 'code-error';
        newErrorDiv.innerHTML = `
            <i class="fas fa-code"></i>
            <p>Failed to load code screenshot</p>
            <button onclick="retryCodeLoad(this)">Retry</button>
        `;
        newErrorDiv.dataset.codeSrc = src;
        newErrorDiv.dataset.codeAlt = alt;
        content.appendChild(newErrorDiv);
    };
}

// Initialize code handling for existing code screenshots
function initializeCodeHandling(modal) {
    const codeImages = modal.querySelectorAll('.media-code');
    codeImages.forEach(img => {
        const container = img.closest('.slide-media');
        if (container && !img.complete) {
            container.classList.add('loading');

            img.onload = function () {
                container.classList.remove('loading');

                // Add code-specific styling
                container.style.background = '#1a202c';
                container.style.border = '1px solid #2d3748';

                // Add zoom functionality if not already present
                const codeContainer = img.closest('.code-container');
                if (!codeContainer) {
                    addCodeZoomControls(container, img);
                }
            };

            img.onerror = function () {
                container.classList.remove('loading');
                container.classList.add('error');
                container.innerHTML = `
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Failed to load code screenshot</p>
                `;
            };
        } else if (img.complete) {
            // Add styling for already loaded images
            const slideMedia = img.closest('.slide-media');
            if (slideMedia) {
                slideMedia.style.background = '#1a202c';
                slideMedia.style.border = '1px solid #2d3748';
            }
        }
    });
}

// Handle window resize for responsive images, videos, and code
window.addEventListener('resize', function () {
    // Debounce resize events
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
        handleImageResize();

        // Update video controls for mobile
        const videos = document.querySelectorAll('.media-video');
        videos.forEach(video => {
            const container = video.closest('.video-container');
            if (container) {
                const existingControls = container.querySelector('.video-controls');
                if (window.innerWidth <= 768 && !existingControls) {
                    addMobileVideoControls(container, video);
                } else if (window.innerWidth > 768 && existingControls) {
                    existingControls.remove();
                }
            }
        });

        // Reset code zoom on resize to prevent layout issues
        const codeImages = document.querySelectorAll('.media-code');
        codeImages.forEach(img => {
            if (img.dataset.zoomLevel && img.dataset.zoomLevel !== '1') {
                resetCodeZoom(img);
            }
        });
    }, 250);
});