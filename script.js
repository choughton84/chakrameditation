* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
    background: linear-gradient(135deg, #6e48aa, #9d50bb);
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1, h2, h3 {
    margin-bottom: 15px;
}

.main-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

@media (min-width: 768px) {
    .main-content {
        grid-template-columns: 1fr 1fr;
    }
    
    .info-section, .journal-section {
        grid-column: span 2;
    }
}

.controls-section, .visualization-section, .info-section, .journal-section {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.control-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
}

select, input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
}

.primary-button, .secondary-button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
}

.primary-button {
    background-color: #6e48aa;
    color: white;
}

.primary-button:hover {
    background-color: #5a3a8a;
}

.secondary-button {
    background-color: #e0e0e0;
    color: #333;
    margin-left: 10px;
}

.secondary-button:hover {
    background-color: #d0d0d0;
}

.volume-control {
    margin-top: 10px;
}

.visualization-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#chakra-canvas {
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.timer {
    font-size: 20px;
    font-weight: bold;
    color: #6e48aa;
}

.info-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

@media (min-width: 768px) {
    .info-section {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

.chakra-info, .affirmation-box, .meditation-box {
    padding: 15px;
    border-radius: 8px;
    background-color: #f9f9f9;
    height: 100%;
}

#affirmation-container, #meditation-container {
    min-height: 100px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    border-left: 4px solid #6e48aa;
}

.journal-section textarea {
    width: 100%;
    height: 150px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    resize: vertical;
    font-size: 16px;
    margin-bottom: 15px;
}

.journal-buttons {
    margin-bottom: 20px;
}

.journal-entries {
    max-height: 300px;
    overflow-y: auto;
}

.journal-item {
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 5px;
    margin-bottom: 10px;
    border-left: 4px solid #6e48aa;
}

.journal-date {
    font-weight: bold;
    margin-bottom: 5px;
    color: #6e48aa;
}

footer {
    text-align: center;
    margin-top: 30px;
    padding: 20px;
    color: #666;
}

/* Chakra-specific colors */
.root-color { color: #ff0000; }
.sacral-color { color: #ff8000; }
.solarPlexus-color { color: #ffff00; }
.heart-color { color: #00ff00; }
.throat-color { color: #00ffff; }
.thirdEye-color { color: #0000ff; }
.crown-color { color: #8000ff; }
