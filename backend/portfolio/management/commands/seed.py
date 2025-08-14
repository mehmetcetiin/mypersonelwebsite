from django.core.management.base import BaseCommand
from portfolio.models import Hero, About, SocialLink, Skill, Project, Experience, Education

class Command(BaseCommand):
    help = 'Seeds the database with initial data'

    def handle(self, *args, **options):
        self.stdout.write('Seeding data...')
        self.seed_data()
        self.stdout.write('Data seeding complete.')

    def seed_data(self):
        # Clear existing data
        Hero.objects.all().delete()
        About.objects.all().delete()
        SocialLink.objects.all().delete()
        Skill.objects.all().delete()
        Project.objects.all().delete()
        Experience.objects.all().delete()
        Education.objects.all().delete()

        # Seed Hero
        Hero.objects.create(
            name="John Doe",
            title="Computer Engineer & Web Developer",
            intro="A passionate developer with a knack for building beautiful and functional web applications."
        )

        # Seed About
        About.objects.create(
            bio="I am a Computer Engineer with a strong foundation in software development and web technologies. I love solving complex problems and learning new things. My goal is to create technology that makes a positive impact.",
            profile_photo="https://via.placeholder.com/150",
            cv="path/to/your/cv.pdf"
        )

        # Seed Social Links
        SocialLink.objects.create(name="GitHub", url="https://github.com", icon_class="fab fa-github")
        SocialLink.objects.create(name="LinkedIn", url="https://linkedin.com", icon_class="fab fa-linkedin")

        # Seed Skills
        Skill.objects.create(name="Python", proficiency_level=90)
        Skill.objects.create(name="Django", proficiency_level=85)
        Skill.objects.create(name="JavaScript", proficiency_level=80)
        Skill.objects.create(name="HTML & CSS", proficiency_level=95)

        # Seed Projects
        Project.objects.create(
            title="Portfolio Website",
            description="The very website you are looking at! Built with Django and Vanilla JS.",
            technologies="Django, Vanilla JS, HTML, CSS",
            live_link="#",
            github_link="#"
        )
        Project.objects.create(
            title="E-commerce Platform",
            description="A full-featured e-commerce site with product management, shopping cart, and payments.",
            technologies="Django, React, Stripe",
            live_link="#",
            github_link="#"
        )

        # Seed Experience
        Experience.objects.create(
            job_title="Software Engineer",
            company="Tech Corp",
            start_date="2022-01-01",
            description="Developed and maintained web applications using Django and Python."
        )

        # Seed Education
        Education.objects.create(
            degree="B.Sc. in Computer Engineering",
            institution="University of Technology",
            start_date="2018-09-01",
            end_date="2022-06-01"
        )
