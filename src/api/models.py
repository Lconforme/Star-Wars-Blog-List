from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String (250))
    first_name = db.Column(db.String(250))
    last_name = db.Column(db.String (250))
    email = db.Column(db.String (250))


class Character(db.Model):
    __tablename__ = 'character'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    birth_year = db.Column(db.String(250), nullable=False)
    eye_color = db.Column(db.String(250), nullable=True)
    gender = db.Column(db.String(250), nullable=True)
    hair_color = db.Column(db.String(250), nullable=True)
    height = db.Column(db.String(250), nullable=False)
    mass = db.Column(db.String(250), nullable=False)
    skin_color = db.Column(db.String(250), nullable=True)
    home_world_id = db.Column(db.Integer, db.ForeignKey('planet.id'))
    home_world = db.relationship('Planet')


class Planet(db.Model):
    __tablename__ = 'planet'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    diameter = db.Column(db.String(250))
    rotational_period = db.Column(db.String(250))
    orbital_period = db.Column(db.String(250))
    gravity = db.Column(db.String(250))
    population = db.Column(db.String(250))
    climate = db.Column(db.String(250))
    terrain = db.Column(db.String(250))
    surface_water = db.Column(db.String(250))


class Starship(db.Model):
    __tablename__ = 'starship'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    model = db.Column(db.String(250))
    starship_class = db.Column(db.String(250))
    manufactuer = db.Column(db.String(250))
    cost_in_credits = db.Column(db.String(250))
    length = db.Column(db.String(250))
    crew = db.Column(db.String(250))
    passengers = db.Column(db.String(250))
    max_atmosphering_speed = db.Column(db.String(250))
    hyperdrive_rating = db.Column(db.String(250))
    MGLT = db.Column(db.String(250))
    cargo_capacity = db.Column(db.String(250))
    consumables = db.Column(db.String(250))


class Favorite(db.Model):
    __tablename__ = 'favorite'
    id = db.Column (db.Integer, primary_key=True)
    user_id = db.Column(db.ForeignKey('user.id'))
    favorite_name = db.Column(db.String(250))
    favorite_planet_id = db.Column(db.Integer, db.ForeignKey('planet.id'))
    favorite_character_id = db.Column(db.Integer, db.ForeignKey('character.id'))
    favorite_starship_id = db.Column(db.Integer, db.ForeignKey('starship.id'))

    def to_dict(self):
        return {}