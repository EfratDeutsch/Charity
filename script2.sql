USE [master]
GO
/****** Object:  Database [Charity]    Script Date: 14/03/2023 16:26:31 ******/
CREATE DATABASE [Charity]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Charity', FILENAME = N'D:\SqlData\MSSQL15.PUPILS\MSSQL\DATA\Charity.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 10%)
 LOG ON 
( NAME = N'Charity_log', FILENAME = N'D:\SqlData\MSSQL15.PUPILS\MSSQL\DATA\Charity_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Charity] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Charity].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Charity] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Charity] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Charity] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Charity] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Charity] SET ARITHABORT OFF 
GO
ALTER DATABASE [Charity] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Charity] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Charity] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Charity] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Charity] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Charity] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Charity] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Charity] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Charity] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Charity] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Charity] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Charity] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Charity] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Charity] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Charity] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Charity] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Charity] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Charity] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Charity] SET  MULTI_USER 
GO
ALTER DATABASE [Charity] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Charity] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Charity] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Charity] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Charity] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Charity', N'ON'
GO
ALTER DATABASE [Charity] SET QUERY_STORE = OFF
GO
USE [Charity]
GO
/****** Object:  Table [dbo].[CATEGORY]    Script Date: 14/03/2023 16:26:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CATEGORY](
	[CategoryId] [int] IDENTITY(1,1) NOT NULL,
	[CategoryName] [nvarchar](50) NOT NULL,
	[ImageUrl] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CHARITY]    Script Date: 14/03/2023 16:26:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CHARITY](
	[CharityId] [int] IDENTITY(1,1) NOT NULL,
	[CharityName] [nvarchar](50) NOT NULL,
	[CategoryId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[CityId] [int] NOT NULL,
	[Neighborhood] [nvarchar](100) NULL,
	[CharityDesc] [nvarchar](500) NULL,
	[Phone] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_CHARITY] PRIMARY KEY CLUSTERED 
(
	[CharityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CITY]    Script Date: 14/03/2023 16:26:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CITY](
	[CityId] [int] IDENTITY(1,1) NOT NULL,
	[CityName] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_CITY] PRIMARY KEY CLUSTERED 
(
	[CityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LOAN]    Script Date: 14/03/2023 16:26:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LOAN](
	[LoanId] [int] IDENTITY(1,1) NOT NULL,
	[CharityId] [int] NOT NULL,
	[LoanDate] [date] NULL,
	[ReturnDate] [date] NULL,
	[StatusId] [int] NOT NULL,
	[ItemName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_LOAN] PRIMARY KEY CLUSTERED 
(
	[LoanId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[STATUS]    Script Date: 14/03/2023 16:26:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[STATUS](
	[StatusId] [int] IDENTITY(1,1) NOT NULL,
	[StatusName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_STATUS] PRIMARY KEY CLUSTERED 
(
	[StatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[USER]    Script Date: 14/03/2023 16:26:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[USER](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](50) NOT NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
 CONSTRAINT [PK_USER] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[CATEGORY] ON 

INSERT [dbo].[CATEGORY] ([CategoryId], [CategoryName], [ImageUrl]) VALUES (1, N'food', N'123/jk')
INSERT [dbo].[CATEGORY] ([CategoryId], [CategoryName], [ImageUrl]) VALUES (2, N'ihadnew', N'hgf45')
INSERT [dbo].[CATEGORY] ([CategoryId], [CategoryName], [ImageUrl]) VALUES (3, N'kl', N'kol')
INSERT [dbo].[CATEGORY] ([CategoryId], [CategoryName], [ImageUrl]) VALUES (4, N'clothes', N'clo123')
INSERT [dbo].[CATEGORY] ([CategoryId], [CategoryName], [ImageUrl]) VALUES (5, N'string', N'string')
INSERT [dbo].[CATEGORY] ([CategoryId], [CategoryName], [ImageUrl]) VALUES (6, N'מפות', N'456')
INSERT [dbo].[CATEGORY] ([CategoryId], [CategoryName], [ImageUrl]) VALUES (7, N'אביזרי חתונה', N'78945')
SET IDENTITY_INSERT [dbo].[CATEGORY] OFF
GO
SET IDENTITY_INSERT [dbo].[CHARITY] ON 

INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (2, N'חלות', 1, 1, 1, N'רמות', N'גמח חלות מטורף', N'0777235999')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (11, N'קוגל', 1, 1, 1, N'רמת שלמה', N'יש קוגל תפו"א יאמי יאמי ויש גם קוגל איטריות עסיסי', N'0583200000')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (13, N'גרביים', 2, 1, 1, N'סנהדריה המורחבת', N'גרביים מקסימות וצנועות בעובי 100 דנייר ומעלה', N'025861234')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (19, N'ארבעס', 1, 1, 1, N'בית וגן', N'ארבעס מושלמים ועגולים וגם גדולים', N'0527159255')
INSERT [dbo].[CHARITY] ([CharityId], [CharityName], [CategoryId], [UserId], [CityId], [Neighborhood], [CharityDesc], [Phone]) VALUES (21, N'כתר תורה', 7, 1, 1, N'הר נוף', N'פשוט נחמד וחינני', N'0504118596')
SET IDENTITY_INSERT [dbo].[CHARITY] OFF
GO
SET IDENTITY_INSERT [dbo].[CITY] ON 

INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (1, N'ירושלים')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (2, N'בני ברק')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (3, N'חיפה')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (4, N'יפו')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (5, N'נתניה')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (6, N'עכו')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (7, N'לוד')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (8, N'אחיסמך')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (9, N'ג''נין')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (10, N'טלז סטון')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (11, N'בית שמש')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (12, N'מירון')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (13, N'כפר ורדים')
INSERT [dbo].[CITY] ([CityId], [CityName]) VALUES (14, N'חמד')
SET IDENTITY_INSERT [dbo].[CITY] OFF
GO
SET IDENTITY_INSERT [dbo].[LOAN] ON 

INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName]) VALUES (0, 2, CAST(N'2023-02-23' AS Date), NULL, 1, N'life')
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName]) VALUES (1, 2, CAST(N'2023-02-23' AS Date), CAST(N'2023-02-23' AS Date), 1, N'notnullprod')
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName]) VALUES (3, 2, CAST(N'2023-02-23' AS Date), NULL, 1, N'nullush')
INSERT [dbo].[LOAN] ([LoanId], [CharityId], [LoanDate], [ReturnDate], [StatusId], [ItemName]) VALUES (6, 2, CAST(N'2023-02-26' AS Date), CAST(N'2023-02-26' AS Date), 1, N'tyu')
SET IDENTITY_INSERT [dbo].[LOAN] OFF
GO
SET IDENTITY_INSERT [dbo].[STATUS] ON 

INSERT [dbo].[STATUS] ([StatusId], [StatusName]) VALUES (1, N'good')
SET IDENTITY_INSERT [dbo].[STATUS] OFF
GO
SET IDENTITY_INSERT [dbo].[USER] ON 

INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (1, N'Efrat', N'Efrat9256', N'Efrat', N'Deutsch')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (2, N'michal@', N'1234', N'Michal', N'Carmi')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (3, N'nani', N'4321', N'nani', N'as')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (4, N'll', N'gfd', N'll', N'jkhg')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (5, N'miki@', N'mm', N'miki', N'tul')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (6, N'', N'', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (7, N'', N'', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (8, N'', N'', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (9, N'', N'', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (10, N'', N'', N'', N'')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (11, N'gr', N'tyry', N'fgd', N'gfd')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (12, N'gr', N'tyry', N'fgd', N'gfd')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (13, N'gr', N'tyry', N'tre', N're')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (14, N'gr', N'tyry', N'עמליה', N'לוינגר')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (15, N'gr', N'tyry', N'עמליה', N'לוינגר')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (16, N'gr', N'tyry', N'םןו', N'םון')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (17, N'gr', N'tyry', N'פרח', N'ציצית')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (18, N'gr', N'tyry', N'nhfk', N'tx,h')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (19, N'Efrat', N'Efrat9256', N'nhfk', N'tx,h')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (20, N'Efrat', N'Efrat9256', N'nhfk', N'tx,h')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (21, N'Efrat', N'Efrat9256', N'nhfk', N'tx,h')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (22, N'Efrat', N'Efrat9256', N'nhfk', N'tx,h')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (23, N'Efrat', N'Efrat9256', N'nhfk', N'tx,h')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (24, N'Efrat', N'Efrat9256', N'nhfk', N'tx,h')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (25, N'גב זליבנסקי', N'ZZZ', N'זיוה', N'זליבנסקי')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (26, N'tbh', N'tbh', N'tbh', N'tbh')
INSERT [dbo].[USER] ([UserId], [UserName], [Password], [FirstName], [LastName]) VALUES (27, N'as', N'as', N'as', N'as')
SET IDENTITY_INSERT [dbo].[USER] OFF
GO
ALTER TABLE [dbo].[CHARITY]  WITH CHECK ADD  CONSTRAINT [FK_CHARITY_CATEGORY] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[CATEGORY] ([CategoryId])
GO
ALTER TABLE [dbo].[CHARITY] CHECK CONSTRAINT [FK_CHARITY_CATEGORY]
GO
ALTER TABLE [dbo].[CHARITY]  WITH CHECK ADD  CONSTRAINT [FK_CHARITY_CITY] FOREIGN KEY([CityId])
REFERENCES [dbo].[CITY] ([CityId])
GO
ALTER TABLE [dbo].[CHARITY] CHECK CONSTRAINT [FK_CHARITY_CITY]
GO
ALTER TABLE [dbo].[CHARITY]  WITH CHECK ADD  CONSTRAINT [FK_CHARITY_USER] FOREIGN KEY([UserId])
REFERENCES [dbo].[USER] ([UserId])
GO
ALTER TABLE [dbo].[CHARITY] CHECK CONSTRAINT [FK_CHARITY_USER]
GO
ALTER TABLE [dbo].[LOAN]  WITH CHECK ADD  CONSTRAINT [FK_LOAN_CHARITY] FOREIGN KEY([CharityId])
REFERENCES [dbo].[CHARITY] ([CharityId])
GO
ALTER TABLE [dbo].[LOAN] CHECK CONSTRAINT [FK_LOAN_CHARITY]
GO
ALTER TABLE [dbo].[LOAN]  WITH CHECK ADD  CONSTRAINT [FK_LOAN_STATUS] FOREIGN KEY([StatusId])
REFERENCES [dbo].[STATUS] ([StatusId])
GO
ALTER TABLE [dbo].[LOAN] CHECK CONSTRAINT [FK_LOAN_STATUS]
GO
USE [master]
GO
ALTER DATABASE [Charity] SET  READ_WRITE 
GO
