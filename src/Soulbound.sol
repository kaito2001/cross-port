// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import "lib/solmate/src/tokens/ERC721.sol";
import "lib/base64/base64.sol";
import "hardhat/console.sol";


interface ICrossDao {
    function ward(address usr) external view returns (bool);
}

contract Soulbound is ERC721 {
    struct Ink {
        uint256 din;
        uint256 era;
    }

    struct Vow {
        uint256 tag;
        address who;
    }

    struct Ode {
        uint256 tag;
        bytes hum;
    }

    uint256 public immutable wake;
    address public immutable soul;
    address public immutable crossDao;

    mapping(uint256 => Ink) public inks;
    mapping(uint256 => Vow) public vows;
    mapping(uint256 => bool) public nabs;
    mapping(uint256 => mapping(address => Ode)) public odes;
    mapping(address => uint256) public owner_sbts;

    uint256 public next = 1;
    uint256 public flow = 91 days;
    uint256 public life = 36_135 days;
    address public gene = address(0x0);

    error Cast();
    error Tied();
    error Deny();
    error Sunk();

    event Mint(address indexed usr, uint256 indexed sid, uint256 indexed din);
    event Bond(address indexed usr, uint256 indexed sid, address indexed who);
    event Sing(address indexed usr, uint256 indexed sid);

    modifier onlyCrossOwner() {
        if (!ICrossDao(crossDao).ward(msg.sender)) revert Deny();
        _;
    }

    constructor(address crossDao_, address soul_) ERC721("Soulbound", "Soul") {
        wake = block.timestamp;
        crossDao = crossDao_;
        soul = soul_;
    }

    function bump(address what) public onlyCrossOwner {
        if (gene != address(0x0)) revert Cast();
        gene = what;
    }

    function file(bytes32 what, uint256 data) public onlyCrossOwner {
        if (what == "flow") flow = data;
        else if (what == "life") life = data;
        else revert Deny();
    }

    function mint(uint256 din) public {
        if (nabs[din]) revert Sunk();
        if ((block.timestamp - wake) > life) revert Sunk();
        if (ERC721(soul).ownerOf(din) != msg.sender) revert Deny();
        uint256 sid;
        unchecked {
            sid = next++;
        }

        _mint(msg.sender, sid);
        inks[sid] = Ink({din: din, era: (block.timestamp - wake) / flow});
        nabs[din] = true;
        emit Mint(msg.sender, sid, din);
    }

    function bond(uint256 sid, address who) public {
        if (ownerOf[sid] != msg.sender) revert Deny();
        
        console.log(block.timestamp);

        if (block.timestamp - vows[sid].tag < flow) revert Tied();
        vows[sid] = Vow({tag: block.timestamp, who: who});
        owner_sbts[who] = sid;

        emit Bond(msg.sender, sid, who);
    }

    function sing(uint256 sid, bytes calldata hum) public {
        odes[sid][msg.sender] = Ode({tag: block.timestamp, hum: hum});
        emit Sing(msg.sender, sid);
    }
 
    function destroy(uint256 sid) public {
        if (ERC721(soul).ownerOf(inks[sid].din) != msg.sender) revert Deny();
        _burn(sid);
    }

    function tokenURI(uint256 sid)
        public
        view
        override
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"name":"',
                                "Soulbound",
                                '","image":"',
                                render(sid),
                                '","license":"GPL-v3.0-or-later","creator":"primitive",',
                                '"description":"An NFT bound to your ENS name.",',
                                '"properties":{',
                                "",
                                "}}"
                            )
                        )
                    )
                )
            );
    }

    function checkOwnerSbt(address who) public view returns (bool) {
        if(owner_sbts[who] != 0) return true;
        else return false;
    }

    function render(uint256 sid) public view returns (string memory) {
        sid;
        return
            string(
                abi.encodePacked(
                    "data:image/svg+xml;base64,",
                    Base64.encode(
                        bytes(
                            '<svg width="512" height="512" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>'
                        )
                    )
                )
            );
    }
}
