# Makefile

# Configuration
SRC_DIR = .
DIST_DIR = .
TEMPLATE = $(SRC_DIR)/index.template.ejs
DATA = $(SRC_DIR)/data.json
INDEX_HTML = $(DIST_DIR)/index.html
CSS_INPUT = $(SRC_DIR)/style.in.css
CSS_OUTPUT = $(DIST_DIR)/style.css
RENDERJS = $(SRC_DIR)/render.js 

# Dependencies
TAILWIND_CLI = @tailwindcss/cli
BUN = bun 

# Targets
all: $(INDEX_HTML) $(CSS_OUTPUT)
 

# Compile Tailwind CSS
$(CSS_OUTPUT): $(CSS_INPUT) $(TEMPLATE)
	@echo "Compiling Tailwind CSS..."
	@$(BUN) x $(TAILWIND_CLI) -i $< -o $@ --minify 


# Render EJS template
$(INDEX_HTML): $(TEMPLATE) $(DATA) $(CSS_OUTPUT)
	@echo "Rendering EJS template..."
	@$(BUN) run $(RENDERJS) -t $(TEMPLATE) -d $(DATA) 


 # Clean the dist directory
clean:
	@echo "Cleaning the dist directory..."
	@rm -f $(INDEX_HTML)
	@rm -f $(CSS_OUTPUT)
	@echo "Dist directory cleaned" 


 #Phony targets
 .PHONY: all clean
